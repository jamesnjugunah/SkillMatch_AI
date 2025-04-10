import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillRecommendationComponent } from './skill-recommendation.component';

describe('SkillRecommendationComponent', () => {
  let component: SkillRecommendationComponent;
  let fixture: ComponentFixture<SkillRecommendationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillRecommendationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillRecommendationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
