import { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, Music, Loader2 } from 'lucide-react';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { collection, addDoc } from 'firebase/firestore';
import { storage, db } from '../../lib/firebase';
import toast, { Toaster } from 'react-hot-toast';

interface BeatForm {
  title: string;
  bpm: number;
  key: string;
  price: number;
  genre: string;
  tags: string[];
}

export default function UploadDashboard() {
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [beatFile, setBeatFile] = useState<File | null>(null);
  const [form, setForm] = useState<BeatForm>({
    title: '',
    bpm: 140,
    key: 'C',
    price: 29.99,
    genre: '',
    tags: []
  });

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      'audio/*': ['.mp3', '.wav']
    },
    maxFiles: 1,
    onDrop: (acceptedFiles) => {
      setBeatFile(acceptedFiles[0]);
    }
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!beatFile) {
      toast.error('Please select a beat file to upload');
      return;
    }

    setUploading(true);
    try {
      // Upload beat file
      const storageRef = ref(storage, `beats/${Date.now()}-${beatFile.name}`);
      const uploadTask = uploadBytesResumable(storageRef, beatFile);

      uploadTask.on('state_changed', 
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgress(progress);
        },
        (error) => {
          toast.error('Error uploading file');
          console.error(error);
          setUploading(false);
        },
        async () => {
          // Get download URL
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          
          // Save beat metadata to Firestore
          await addDoc(collection(db, 'beats'), {
            ...form,
            audioUrl: downloadURL,
            fileName: beatFile.name,
            fileSize: beatFile.size,
            uploadedAt: new Date().toISOString(),
            plays: 0,
            downloads: 0
          });

          toast.success('Beat uploaded successfully!');
          setUploading(false);
          setBeatFile(null);
          setProgress(0);
          
          // Reset form
          setForm({
            title: '',
            bpm: 140,
            key: 'C',
            price: 29.99,
            genre: '',
            tags: []
          });
        }
      );
    } catch (error) {
      toast.error('Error uploading beat');
      console.error(error);
      setUploading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white py-20">
      <Toaster />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-4 mb-8">
          <Music className="h-8 w-8" />
          <h1 className="text-3xl font-bold">Upload Beat</h1>
        </div>

        <div className="bg-zinc-900/50 rounded-xl p-6 border border-zinc-800">
          <div {...getRootProps()} className="mb-6">
            <input {...getInputProps()} />
            <div className={`border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-colors ${isDragActive ? 'border-purple-500 bg-purple-500/10' : 'border-zinc-700 hover:border-purple-500/50'}`}>
              <Upload className="h-12 w-12 mx-auto mb-4 text-zinc-400" />
              <p className="text-zinc-400">
                {beatFile ? beatFile.name : 'Drag & drop your beat file here, or click to select'}
              </p>
              <p className="text-sm text-zinc-500 mt-2">Supports MP3, WAV (max 50MB)</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-zinc-400 mb-1">
                Title
              </label>
              <input
                type="text"
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                className="w-full bg-black border-zinc-800 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-zinc-400 mb-1">
                  BPM
                </label>
                <input
                  type="number"
                  value={form.bpm}
                  onChange={(e) => setForm({ ...form, bpm: Number(e.target.value) })}
                  className="w-full bg-black border-zinc-800 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-zinc-400 mb-1">
                  Key
                </label>
                <input
                  type="text"
                  value={form.key}
                  onChange={(e) => setForm({ ...form, key: e.target.value })}
                  className="w-full bg-black border-zinc-800 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-zinc-400 mb-1">
                  Price ($)
                </label>
                <input
                  type="number"
                  step="0.01"
                  value={form.price}
                  onChange={(e) => setForm({ ...form, price: Number(e.target.value) })}
                  className="w-full bg-black border-zinc-800 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-zinc-400 mb-1">
                  Genre
                </label>
                <input
                  type="text"
                  value={form.genre}
                  onChange={(e) => setForm({ ...form, genre: e.target.value })}
                  className="w-full bg-black border-zinc-800 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                  required
                />
              </div>
            </div>

            {uploading && (
              <div className="bg-zinc-800/50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-zinc-400">Uploading...</span>
                  <span className="text-sm text-zinc-400">{Math.round(progress)}%</span>
                </div>
                <div className="w-full bg-zinc-700 rounded-full h-2">
                  <div
                    className="bg-purple-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            )}

            <button
              type="submit"
              disabled={uploading}
              className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {uploading ? (
                <span className="flex items-center justify-center">
                  <Loader2 className="animate-spin h-5 w-5 mr-2" />
                  Uploading...
                </span>
              ) : (
                'Upload Beat'
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}