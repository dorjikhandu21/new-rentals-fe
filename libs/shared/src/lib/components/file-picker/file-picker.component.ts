import {Component, Input, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup} from "@angular/forms";
import {CategoryEnum, CredentialsService} from "@new-rentals/shared";

@Component({
  selector: 'new-rentals-file-picker',
  templateUrl: './file-picker.component.html',
  styleUrls: ['./file-picker.component.scss'],
})
export class FilePickerComponent implements OnInit {
  @Input() attachments?: FormArray;
  accept = 'image/jpeg,image/png,image/jpg';
  constructor(private credentialsService: CredentialsService) {}

  ngOnInit(): void {}

  selectFile(event: Event): void {
    const reader: FileReader = new FileReader();
    let fileUrl: string;
    // @ts-ignore
    reader.readAsDataURL(event?.target?.['files']?.[0]);
    reader.onload = (events:ProgressEvent<FileReader>): void => {
      fileUrl = events?.target?.result as string;
      this.addToControls(event, fileUrl);
    }
  }

  addToControls(event: Event, fileUrl: string): void {
    const attachmentControl: FormGroup = new FormGroup({
      category: new FormControl(CategoryEnum.Property),
      // @ts-ignore
      file: new FormControl(event?.target?.['files']?.[0]),
      // @ts-ignore
      fileFileName: new FormControl(event?.target?.['files']?.[0]['name']),
      url: new FormControl(fileUrl),
      userId: new FormControl(this.credentialsService.currentUser().id)
    })
    // @ts-ignore
    this.attachments.push(attachmentControl);
  }

  removeAttachment(index: number): void {
    this.attachments?.removeAt(index);
  }
}
