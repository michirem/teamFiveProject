import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators }  from '@angular/forms';
import Swal from 'sweetalert2/dist/sweetalert2.js'; //sweetalert2 related

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent implements OnInit {
  orderForm = new FormGroup({
    name: new FormControl('', Validators.compose([
        Validators.required, Validators.minLength(5), Validators.maxLength(40)
      ])),
    phone: new FormControl('',),
    email:new FormControl('',),
    contactMessage:new FormControl('',Validators.compose([
        Validators.required, Validators.minLength(5), Validators.maxLength(2000)
      ])),
  });
  constructor() { }

  ngOnInit(): void {
  }

  get name() { return this.orderForm.get('name');}
  get phone() { return this.orderForm.get('age');}
  get email() { return this.orderForm.get('email');}
  get contactMessage() { return this.orderForm.get('contactMessage');}

  onSend():void {
    if(this.orderForm.valid){
      console.log('sumbit button pressed');
      var formValues = this.orderForm.value;
      console.log(formValues);
      
      this.mySweetAlert2Box(formValues); // 
      //`Name: ${a.name},\nPhone: ${a.phone},\nMail: ${a.email},\nMessage:\n${a.contactMessage}`
      //alert("Hey there!\n\nWe would like to confirm that your message has been received and we will be getting back to you shortly.\n\nThank you and have a wonderful day!");
      

    }
  }


  /* hex values of colors
    $cultured: #f3f2f0ff;
    $khaki-web: #c2b4a1ff;
    $gray-web: #737e81ff;
  */
  mySweetAlert2Box(data){
    Swal.fire({
      title: '<span style="color:#f3f2f0ff">Hey ' + data.name + '!</span>',
      html: '<span style="color:#f3f2f0ff">We would like to confirm that your message has been received and we will be getting back to you shortly.<br><br>Thank you and have a wonderful day!</span>',
      imageUrl: 'https://images.pexels.com/photos/6791494/pexels-photo-6791494.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
      imageWidth: 400,
      imageHeight: 240,
      imageAlt: 'contactImage',
      background: '#c2b4a1ff',
      confirmButtonText: '<span style="color:#f3f2f0ff"> <i class="far fa-thumbs-up"></i> Great!</span>',
      confirmButtonColor: '#737e81ff',
      customClass: "Custom_Alert",
      allowOutsideClick: false
    })
  }
}


