import { BatteryLevel, Message, PowerState } from '../model/message';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const INITIAL_MESSAGE: Message = {
    audio: {
        currentAlbum: '?',
        currentTrack: -1,
        isPlaying: false,
        volume: -1,
    },
    power: {
        level: BatteryLevel.invalid,
        state: PowerState.invalid,
        voltage: -1,
    },
    heap: -1,
};

@Injectable({
    providedIn: 'root',
})
export class ServerEventsService {
    constructor() {
        // tslint:disable-next-line: no-any
        this.source.addEventListener('status' as any, (e: MessageEvent) => this.messages.next(JSON.parse(e.data)));
    }

    private messages = new BehaviorSubject<Message>(INITIAL_MESSAGE);
    private source = new EventSource(this.url());

    getMessages(): Observable<Message> {
        return this.messages;
    }

    private url(): string {
        // tslint:disable-next-line: no-any
        return environment.boxUrl + '/events';
    }
}
