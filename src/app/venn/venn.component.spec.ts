import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VennComponent } from './venn.component';

describe('VennComponent', () => {
  let component: VennComponent;
  let fixture: ComponentFixture<VennComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VennComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VennComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
