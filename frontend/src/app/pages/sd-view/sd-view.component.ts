import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-sd-view',
  templateUrl: './sd-view.component.html',
  styleUrls: ['./sd-view.component.scss'],
})
export class SdViewComponent {
  generationId: string = '';

  constructor(private route: ActivatedRoute, private api: ApiService) {}

  ngOnInit(): void {
    this.generationId = this.route.snapshot.paramMap.get('id') || '';
  }
}
