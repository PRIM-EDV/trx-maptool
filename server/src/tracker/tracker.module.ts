import { Module } from '@nestjs/common';
import { MapModule } from 'src/map/map.module';
import { TrackerGateway } from './tracker.gateway';
import { TrackerService } from './tracker.service';

@Module({
    imports: [ MapModule ],
    providers: [TrackerGateway, TrackerService]
})
export class TrackerModule {}
