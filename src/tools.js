export const tools = [
  {id:'pdf-merge',name:'PDF Merge',group:'PDF Tools',icon:'↗',formats:'PDF',desc:'Combine PDF files in your chosen order.',kind:'pdf',multiple:true,action:'merge'},
  {id:'pdf-split',name:'PDF Split & Extract',group:'PDF Tools',icon:'✂',formats:'PDF',desc:'Create a PDF from selected page ranges.',kind:'pdf',action:'split'},
  {id:'pdf-rotate',name:'PDF Rotate',group:'PDF Tools',icon:'↻',formats:'PDF',desc:'Rotate every page without rasterizing.',kind:'pdf',action:'rotate'},
  {id:'pdf-watermark',name:'PDF Watermark',group:'PDF Tools',icon:'✦',formats:'PDF',desc:'Add a text watermark to each page.',kind:'pdf',action:'watermark'},
  {id:'pdf-page-numbers',name:'PDF Page Numbers',group:'PDF Tools',icon:'#',formats:'PDF',desc:'Add clear page numbers to a PDF.',kind:'pdf',action:'numbers'},
  {id:'pdf-metadata',name:'PDF Metadata Viewer',group:'PDF Tools',icon:'ⓘ',formats:'PDF',desc:'Read document metadata locally.',kind:'pdf',action:'metadata'},
  {id:'images-to-pdf',name:'Images to PDF',group:'PDF ↔ Image Tools',icon:'▣',formats:'JPG, PNG, WEBP',desc:'Turn one or more images into a PDF.',kind:'image',multiple:true,action:'images-pdf'},
  {id:'image-compress',name:'Image Compressor',group:'Compression Tools',icon:'⇲',formats:'JPG, PNG, WEBP',desc:'Reduce image file size with quality control.',kind:'image',action:'compress'},
  {id:'image-resize',name:'Image Resizer',group:'Image Tools',icon:'⤢',formats:'JPG, PNG, WEBP',desc:'Resize images while preserving proportions.',kind:'image',action:'resize'},
  {id:'image-crop',name:'Image Cropper',group:'Image Tools',icon:'⌗',formats:'JPG, PNG, WEBP',desc:'Crop to freeform or common aspect ratios.',kind:'image',action:'crop'},
  {id:'image-convert',name:'Image Converter',group:'File Conversion Tools',icon:'⇄',formats:'JPG, PNG, WEBP',desc:'Convert image formats in your browser.',kind:'image',action:'convert'},
  {id:'image-rotate',name:'Image Rotator',group:'Image Tools',icon:'↺',formats:'JPG, PNG, WEBP',desc:'Rotate or flip an image.',kind:'image',action:'image-rotate'},
  {id:'image-background',name:'Image Background',group:'Image Tools',icon:'◐',formats:'JPG, PNG, WEBP',desc:'Replace an image background with a color.',kind:'image',action:'background'},
  {id:'image-metadata',name:'Image Metadata Viewer',group:'Utility Tools',icon:'ⓘ',formats:'JPG, PNG, WEBP',desc:'Inspect dimensions, format, and file size.',kind:'image',action:'image-metadata'}
];
export const byId=id=>tools.find(t=>t.id===id);
