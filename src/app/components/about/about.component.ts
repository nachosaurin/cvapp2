import { COMPILER_OPTIONS, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AboutService } from 'src/app/services/about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  textAboutForm!: FormGroup;
  textAbout: any;
  text: any;
  savedText: any;
  

  constructor(
    public fb: FormBuilder,
    public aboutService: AboutService
    
  ){

  }

  ngOnInit():void{
    
    this.textAboutForm = this.fb.group({
        id:['1'],
        textAbout:['', Validators.required]
     })

      this.aboutService.getText().subscribe(resp=>{
        this.textAbout= resp;
      },
      (error: any)=>{console.error(error)}
      )
    
  }

  save(): void {
    this.aboutService.saveAboutText(this.textAboutForm.value).subscribe(resp=>{
      this.textAboutForm.reset();
      this.textAbout.push();
    },
    error=>{console.error(error)}
    )
  }

  

  /*edit(text: any){
    this.textAboutForm.setValue({
      
    })
  }*/
}
