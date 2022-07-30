import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProdutsComponent } from './create-produts.component';

describe('CreateProdutsComponent', () => {
  let component: CreateProdutsComponent;
  let fixture: ComponentFixture<CreateProdutsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateProdutsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateProdutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
