'use client'

import { useState } from 'react'
import { Upload, File, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'

interface UploadZoneProps {
  onUploadComplete?: (url: string) => void
  maxSize?: number // in MB
  accept?: string
}

export function UploadZone({ onUploadComplete, maxSize = 10, accept = 'image/*' }: UploadZoneProps) {
  const [isDragging, setIsDragging] = useState(false)
  const [file, setFile] = useState<File | null>(null)
  const [progress, setProgress] = useState(0)
  const [status, setStatus] = useState<'idle' | 'uploading' | 'success' | 'error'>('idle')

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setIsDragging(true)
    } else if (e.type === 'dragleave') {
      setIsDragging(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)
    
    const droppedFile = e.dataTransfer.files?.[0]
    if (droppedFile) handleFile(droppedFile)
  }

  const handleFile = (selectedFile: File) => {
    if (selectedFile.size > maxSize * 1024 * 1024) {
      alert(`File size exceeds ${maxSize}MB limit`)
      return
    }
    setFile(selectedFile)
    startUpload()
  }

  const startUpload = async () => {
    setStatus('uploading')
    setProgress(0)
    
    // Simulate upload
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 95) {
          clearInterval(interval)
          return 95
        }
        return prev + 5
      })
    }, 100)

    try {
      // Here you would normally use UploadThing or your API
      setTimeout(() => {
        clearInterval(interval)
        setProgress(100)
        setStatus('success')
        onUploadComplete?.('https://cdn.heybirdy.com/sample-file.jpg')
      }, 2000)
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="w-full">
      <div
        onDragEnter={handleDrag}
        onDragOver={handleDrag}
        onDragLeave={handleDrag}
        onDrop={handleDrop}
        className={`
          relative border-2 border-dashed rounded-lg p-12 transition-colors
          flex flex-col items-center justify-center text-center
          ${isDragging ? 'border-primary bg-primary/5' : 'border-muted-foreground/25'}
          ${status === 'success' ? 'border-green-500 bg-green-50' : ''}
        `}
      >
        {status === 'idle' && (
          <>
            <div className="p-4 bg-primary/10 rounded-full mb-4">
              <Upload className="w-8 h-8 text-primary" />
            </div>
            <p className="text-lg font-medium">Click or drag to upload</p>
            <p className="text-sm text-muted-foreground mt-1">
              {accept} up to {maxSize}MB
            </p>
            <input
              type="file"
              accept={accept}
              onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
          </>
        )}

        {status === 'uploading' && (
          <div className="w-full max-w-xs">
            <File className="w-12 h-12 text-primary mx-auto mb-4 animate-pulse" />
            <p className="text-sm font-medium mb-2">Uploading {file?.name}...</p>
            <Progress value={progress} className="h-2" />
          </div>
        )}

        {status === 'success' && (
          <div className="flex flex-col items-center">
            <CheckCircle2 className="w-12 h-12 text-green-500 mb-4" />
            <p className="text-lg font-medium text-green-700">Upload Complete!</p>
            <p className="text-sm text-green-600 mb-4">{file?.name}</p>
            <Button variant="outline" size="sm" onClick={() => setStatus('idle')}>
              Upload another
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
