export interface Event  {
    name: string;
    location: string;
    date: Date;
    startTime: string;
    endTime: string | null;
    price: number
}

export interface Action {
    type:string;
    payload?:Event
}

const initialState:Event = {
    name: "",
    location: "",
    date: new Date(0),
    startTime: "",
    endTime: "",
    price: 0
}

export default function reducer(state:Event=initialState, action:Action):Event {
    switch(action.type) {
        case "add": {
            return action.payload as Event
        }
        case "clear": {
            return initialState
        }
        default: return state
    }
}

export function addEvent(event:Event):Action {
    return {
        type: "add",
        payload: event
    }
}

export function clearState() {
    return {
        type: "clear",
    }
}