import { CommonModule } from '@angular/common'
import { ChangeDetectionStrategy, Component } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatToolbarModule } from '@angular/material/toolbar'
import { UntilDestroy } from '@ngneat/until-destroy'
import { MyData } from '@psk/psk-lib'

export interface VisualizationState {
  frameNumber: number
  objects: VisualObjectData[]
}

export interface VisualObjectData {
  id: string
  x: number
  y: number
  color: string
  label?: string
}

@UntilDestroy()
@Component({
  standalone: true,
  imports: [CommonModule, MatIconModule, MatToolbarModule, MatButtonModule],
  selector: 'psk-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  myData: MyData = {
    test: true,
  }
}
