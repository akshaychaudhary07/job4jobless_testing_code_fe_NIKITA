import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PostBlogComponent } from '../post-blog.component';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';
// import { QuillModule } from 'ngx-quill';

@Component({
  selector: 'app-blog-banner',
  standalone: true,
  imports: [CommonModule, PostBlogComponent, FormsModule,],
  templateUrl: './blog-banner.component.html',
  styleUrl: './blog-banner.component.css'
})
export class BlogBannerComponent {
  private savedSelection: Range | null = null;

  // Handle the color change for text color
  changeTextColor(event: any) {
    const color = event.target.value;
    const selection = window.getSelection();
    if (selection && selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      const span = document.createElement('span');
      span.style.color = color;
      range.surroundContents(span); // Apply the color to the selected text
    }
  }

  // Handle the color change for background highlight
  changeHighlightColor(event: any) {
    const color = event.target.value;
    const selection = window.getSelection();
    if (selection && selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      const span = document.createElement('span');
      span.style.backgroundColor = color;
      range.surroundContents(span); // Apply the background color
    }
  }

  // Apply other formatting actions
  execCommand(command: string) {
    document.execCommand(command, false, '');
  }

  // Save the current selection
  saveSelection() {
    const selection = window.getSelection();
    if (selection && selection.rangeCount > 0) {
      this.savedSelection = selection.getRangeAt(0);
    }
  }

  // Restore the saved selection
  restoreSelection() {
    const selection = window.getSelection();
    if (this.savedSelection && selection) {
      selection.removeAllRanges();
      selection.addRange(this.savedSelection);
    }
  }

  // Update the saved selection when user interacts with the editor
  updateSelection() {
    this.saveSelection();
  }

  // Handle content change events
  onContentChange(event: Event) {
    console.log('Content changed:', (event.target as HTMLElement).innerHTML);
  }
  
  formData = {
    title: '',
    description: '',
    content: '',
  };

  newTag: string = '';
  tags: string[] = [];
  bannerImage: File | null = null;

  // Add a tag
  addTag() {
    if (this.newTag.trim()) {
      this.tags.push(this.newTag.trim());
      this.newTag = '';
    }
  }
  // Remove a tag
  removeTag(index: number) {
    this.tags.splice(index, 1);
  }

  selectedFiles: File[] = [];
  // Handle file selection
  isDragAreaVisible: boolean = false;  // To control the visibility of the drag area

  // Getter to return a string of file names, or 'No files chosen' if no files are selected
  get selectedFilesNames(): string {
    return this.selectedFiles.length > 0
      ? this.selectedFiles.map(file => file.name).join(', ')
      : 'No files chosen';
  }

  // Handle file selection from file dialog
  onFileSelected(event: any) {
    const files: FileList = event.target.files;
    if (files.length > 0) {
      this.selectedFiles = Array.from(files);  // Store the selected files
    }
  }

  // Handle drag-and-drop file selection
  onDrop(event: DragEvent) {
    event.preventDefault();  // Prevent default behavior (file opening)
    const files = event.dataTransfer?.files;
    if (files && files.length > 0) {
      this.selectedFiles = Array.from(files);  // Store the dropped files
    }
  }

  // Prevent default behavior when files are dragged over the drop area
  onDragOver(event: DragEvent) {
    event.preventDefault();  // Allow drag to drop
  }

  // Simulate file upload when "Upload" button is clicked
  uploadFiles() {
    if (this.selectedFiles.length > 0) {
      // Example upload logic (you can integrate actual file upload here)
      console.log('Uploading files:', this.selectedFiles);

      // Simulate a success message after upload
      alert('Files uploaded successfully!');
    } else {
      alert('No files selected.');
    }
  }

  // Toggle the drag-and-drop area visibility when the "Upload" button is clicked
  toggleDragArea() {
    this.isDragAreaVisible = !this.isDragAreaVisible;
  }

  // Handle form submission
  onSubmit() {
    if (this.formData.title && this.formData.description && this.formData.content) {
      console.log('Form Submitted:', this.formData);
      console.log('Tags:', this.tags);
      console.log('Files:', this.selectedFiles);
    } else {
      console.log('Form is incomplete!');
    }
  }

  // Handle cancel
  onCancel() {
    console.log('Form cancelled');
    this.formData = { title: '', description: '', content: '' }; // Reset the form data
    this.tags = []; // Reset tags
    this.selectedFiles = []; // Reset file selection
  }




  quillModules = {
    toolbar: [
      [{ header: '1' }, { header: '2' }, { font: [] }],
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ align: [] }],
      ['bold', 'italic', 'underline'],
      ['blockquote', 'code-block'],
      [{ color: [] }, { background: [] }],
      ['link'],
      ['clean'],
    ],
  };
}
