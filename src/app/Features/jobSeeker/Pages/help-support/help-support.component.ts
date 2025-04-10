import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-help-support',
  imports: [ CommonModule, ReactiveFormsModule ],
  standalone: true,
  templateUrl: './help-support.component.html',
  styleUrl: './help-support.component.css'
})
export class HelpSupportComponent {
  contactForm: FormGroup;
  submitted = false;
  supportSuccess = false;
  
  faqItems = [
    {
      question: 'How do I create an account?',
      answer: 'To create an account, click on the "Sign Up" button in the top-right corner of the homepage. Fill in your personal details, create a password, and verify your email address to complete the registration process.',
      isOpen: false
    },
    {
      question: 'How do I update my resume/CV?',
      answer: 'Log into your account, navigate to "My Profile" and select the "Resume/CV" tab. You can upload a new document or edit your existing information directly on the platform.',
      isOpen: false
    },
    {
      question: 'How can I improve my job match results?',
      answer: 'Complete your profile fully with relevant skills, experience, and preferences. The more details you provide, the better our matching algorithm works. Also regularly update your skills and experiences.',
      isOpen: false
    },
    {
      question: 'What should I do if I forgot my password?',
      answer: 'On the login page, click the "Forgot Password" link. Enter your registered email address, and we\'ll send you instructions to reset your password.',
      isOpen: false
    },
    {
      question: 'How do I apply for a job?',
      answer: 'When viewing a job posting, click the "Apply Now" button. You can choose to use your existing profile information or customize your application for that specific position.',
      isOpen: false
    },
    {
      question: 'How can I track my job applications?',
      answer: 'Go to the "My Applications" section in your dashboard to see all your submitted applications and their current status.',
      isOpen: false
    }
  ];

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  // Getter for easy access to form fields
  get f(): { [key: string]: AbstractControl } {
    return this.contactForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.contactForm.invalid) {
      return;
    }

    // In a real application, you would send this data to your backend
    console.log('Support request submitted', this.contactForm.value);
    
    // Show success message
    this.supportSuccess = true;
    this.submitted = false;
    this.contactForm.reset();
    
    // Reset success message after 5 seconds
    setTimeout(() => {
      this.supportSuccess = false;
    }, 5000);
  }

}
