import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionaireComponent } from './questionaire.component';

describe('QuestionaireComponent', () => {
  let component: QuestionaireComponent;
  let fixture: ComponentFixture<QuestionaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuestionaireComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuestionaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
