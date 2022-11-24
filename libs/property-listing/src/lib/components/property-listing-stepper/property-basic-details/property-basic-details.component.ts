import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {FormArray, FormControl, FormGroup} from "@angular/forms";
import {PropertyFacadeService} from "../../../services/property-facade.service";
import {CategoryEnum} from "@new-rentals/shared";

@Component({
  selector: 'new-rentals-property-basic-details',
  templateUrl: './property-basic-details.component.html',
  styleUrls: ['./property-basic-details.component.scss'],
})
export class PropertyBasicDetailsComponent implements OnInit {
  @Input() basicDetail?: FormGroup;
  @ViewChild('fileUpload', {static: false}) fileUpload?: ElementRef;
  imageUrls: {url: string, fileName: string }[] = [];
  constructor(private propertyFacadeService: PropertyFacadeService) {}

  ngOnInit(): void {
  }

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
    const attachments: FormArray = this.basicDetail?.get('attachments') as FormArray;
    const attachmentControl: FormGroup = new FormGroup({
      category: new FormControl(CategoryEnum.Property),
      // @ts-ignore
      file: new FormControl(event?.target?.['files']?.[0]),
      // @ts-ignore
      fileFileName: new FormControl(event?.target?.['files']?.[0]['name']),
      url: new FormControl(fileUrl)
    })
    attachments.push(attachmentControl);
  }

}
