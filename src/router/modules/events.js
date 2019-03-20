import Events from '@/views/Home/Events'
import Event from '@/views/Home/Events/id';
const events = {
    path: '/home/events',
    name: 'events',
    component: Events,
    meta: 'events',
    children: [
        {
            path: ':id',
            name: 'event',
            component: Event,
            meta: 'event'
        }
    ]
}
export default events