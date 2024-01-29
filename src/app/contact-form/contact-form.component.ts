import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent {
  constructor(

    private http: HttpClient,


  ) {}
  @ViewChild('contactForm') formRef!: NgForm;
  inputData = { inputName: '', inputEmail: '', inputMessage: '' };
showSuccess: boolean = false;


  appendFormDatas(
    formData: FormData,
    nameField: string,
    emailField: string,
    messageField: string
  ) {
    formData.append('name', nameField);
    formData.append('email', emailField);
    formData.append('message', messageField);
  }

  appendFormData(formData: FormData, inputData: any) {
    formData.append('name', inputData.inputName);
    formData.append('email', inputData.inputEmail);
    formData.append('message', inputData.inputMessage);
  }

  async sendMail() {
    //Animation anzeigen
    console.log(
      'Message to send:','\n',
      this.inputData.inputName,'\n',
      this.inputData.inputEmail,'\n',
      this.inputData.inputMessage
    );
    //senden
    this.http
    .get<any>(
      'https://script.google.com/macros/s/AKfycbxXC-BrkjNB3G86kGqVw04veZa1F5St40T89PgmclU7UrFu62vK70JhvnvWF0rCjPLE/exec?name='+this.inputData.inputName +'&email='+this.inputData.inputEmail+'&message=' + this.inputData.inputMessage,
    )
    .subscribe((res) => {
      this.showSuccess = true;

      //TODO 
      setTimeout(() => {
        this.showSuccess = false
      }, 5000);
    });
  
    //Reset
    this.formRef.resetForm();
    //Text anzeigen "Nachricht gesendet"
  }
}