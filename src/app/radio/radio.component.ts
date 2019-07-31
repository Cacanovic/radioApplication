import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { RadioStationModel } from '../models/radioStation.model';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss']
})
export class RadioComponent implements OnInit {

  @ViewChild('radio') playerRef: ElementRef<HTMLAudioElement>;

  get $player(): HTMLAudioElement {
    return this.playerRef.nativeElement;
  }

  radioStations: Array<RadioStationModel> = [
    {
      id: 1,
      name: 'Play radio',
      src: 'http://stream.playradio.rs:8001/play.mp3',
      coverPhoto: 'assets/images/play.jpg'
    },
    {
      id: 2,
      name: 'TDI radio',
      src: 'http://streaming.tdiradio.com/tdiradio',
      coverPhoto: 'assets/images/tdi.jpg'
    },
    {
      id: 3,
      name: 'S radio',
      src: 'http://sradio1.ipradio.rs:9000/;*.mp3',
      coverPhoto: 'assets/images/s.jpg'
    },
    {
      id: 4,
      name: 'Dash Ekstra radio',
      src: 'http://astehshop.com:5000/;&type=mp3',
      coverPhoto: 'assets/images/dashEkstra.png'
    },
    {
      id: 5,
      name: 'Lotel radio',
      src: 'http://188.40.95.74:8142/;*.mp3',
      coverPhoto: 'assets/images/lotel.jpg'
    },
    {
      id: 6,
      name: 'Naxi radio',
      src: 'http://naxi64.streaming.rs:9160/;*.mp3',
      coverPhoto: 'assets/images/naxi.png'
    }
  ];

  selectedStation: RadioStationModel = {
    id: 0,
    name: '',
    src: '',
    coverPhoto: ''
  };
  playingStation = 0;
  volume = 0.70;
  mutedVolume = 0;
  constructor() { }

  ngOnInit() {
    //this.selectedStation = this.radioStations[0];
    //this.play(0);
  }

  play(index) {
    this.playingStation = this.radioStations[index].id;
    this.selectedStation = this.radioStations[index];
    this.$player.src = this.selectedStation.src;
    this.$player.play();
  }
  pause() {
    this.$player.pause();
    this.playingStation = 0;
  }

  //function on parameter change render again chart
  onChangeVolume(event: any) {
    this.volume = event.value;
    this.$player.volume = this.volume;
  }

  mute(vol) {
    this.$player.volume = 0;
    this.mutedVolume = vol;
    this.volume = 0;
  }

  unMute() {
    if (this.mutedVolume > 0) {
      this.volume = this.mutedVolume;
    } else {
      this.volume = 0.5;
    }
    this.$player.volume = this.volume;

  }


}
