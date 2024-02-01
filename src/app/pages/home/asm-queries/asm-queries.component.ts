import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'molla-asm-queries',
  templateUrl: './asm-queries.component.html',
  styleUrls: ['./asm-queries.component.scss']
})
export class AsmQueriesComponent implements OnInit {

  constructor(private toastr:ToastrService, private route: Router) {
    emailjs.init('service_kgkl43o');
  }

  ngOnInit(): void {
  }

  formData = {
    achivement_before: '',
    achivement_after: '',
    manpower_required: '',
    noof_manpower_required: '',
    service_center_required: '',
    service_center_location: '',
    quality_issue: '',
    logistic_issue: '',
    marketing_support: '',
    suggestion: ''
  };

  onSubmit() {
    console.log('Form data submitted:', this.formData);

    if((this.formData.achivement_before == "" || this.formData.achivement_before == null) || (this.formData.achivement_after == "" || this.formData.achivement_after == null) || (this.formData.manpower_required == "" || this.formData.manpower_required == null) || (this.formData.noof_manpower_required == "" || this.formData.noof_manpower_required == null) || (this.formData.service_center_required == "" || this.formData.service_center_required == null) || (this.formData.service_center_location == "" || this.formData.service_center_location == null) || (this.formData.quality_issue == "" || this.formData.quality_issue == null) || (this.formData.logistic_issue == "" || this.formData.logistic_issue == null) || (this.formData.marketing_support == "" || this.formData.marketing_support == null) || (this.formData.suggestion == "" || this.formData.suggestion == null)){
      this.toastr.error('all fields are required');
    }
    else{
      emailjs.send('service_k629upn', 'template_khitxzf', this.formData, 'a_FLOGjYo52iEx92o')
      .then((response) => {
        console.log('Email sent successfully:', response);
        this.formData = {
          achivement_before: '',
          achivement_after: '',
          manpower_required: '',
          noof_manpower_required: '',
          service_center_required: '',
          service_center_location: '',
          quality_issue: '',
          logistic_issue: '',
          marketing_support: '',
          suggestion: ''
        };
        this.route.navigate(["/thank-you"])
        // this.toastr.success('Email sent successfully:');
      }, (error) => {
        console.error('Email send failed:', error);
        this.formData = {
          achivement_before: '',
          achivement_after: '',
          manpower_required: '',
          noof_manpower_required: '',
          service_center_required: '',
          service_center_location: '',
          quality_issue: '',
          logistic_issue: '',
          marketing_support: '',
          suggestion: ''
        };
        this.toastr.error('Email send failed:', error);
      });
    }
  }
}
