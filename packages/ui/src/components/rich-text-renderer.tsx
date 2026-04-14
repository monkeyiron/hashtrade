import React from 'react';
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

interface RichTextRendererProps {
  content: string;
  className?: string;
}

export const RichTextRenderer = ({ content, className }: RichTextRendererProps) => {
  const editor = useEditor({
    extensions: [StarterKit],
    content,
    editable: false,
    immediatelyRender: false,
  })

  if (!editor) {
    return null
  }

  return (
    <div className={`prose w-full prose-invert max-w-none ${className || ''}`}>
      <EditorContent editor={editor} />
    </div>
  )
}
