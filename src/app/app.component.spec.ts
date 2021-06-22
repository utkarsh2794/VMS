import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ServerUtilityService } from './server-utility.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HeaderComponent } from './header/header.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent, HeaderComponent],
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [ServerUtilityService],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'CustomerInfo'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('CustomerInfo');
  });
});
