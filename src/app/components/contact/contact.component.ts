import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  textContactForm!: FormGroup;
  textContact: any;
  text: any;
  savedText: any;


  constructor(
    public fb: FormBuilder,
    public contactService:ContactService
  ){}

  ngOnInit():void {
    this.textContactForm = this.fb.group({
      id: ['1'],
      textContact: ['',Validators.required]
    })

    this.contactService.getText().subscribe(resp=>{
      this.textContact = resp
    },
    (error: any)=>{console.error(error)}
    )
  }

  save():void {
    this.contactService.saveContactText(this.textContactForm.value).subscribe(resp=>{
      this.textContactForm.reset();
      this.textContact.push(resp);
    },
    error=>{console.error(error)}
    )
  }
  delete(id: any){
    this.contactService.deleteContactText(id).subscribe(resp=>{
      if(resp===true){
        this.textContact.pop(id);
    }
  })
  }

  edit(text: any){
    this.textContactForm.setValue({
      id:text.id,
      textContact: text.textContact,
    })
  }

}
