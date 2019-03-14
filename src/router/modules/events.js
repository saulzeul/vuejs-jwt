import Events from '@/views/Home/Events'
import Event from '@/views/Home/Events/id';
const events = {
    path: '/home/events',
    name: 'events',
    component: Events,
    meta: [
        { id: 1, name: 'home', path: '/home' },
        { id: 2, name: 'events', path: '/home/events' },
    ],
    children: [
        {
            path: ':id',
            name: 'event',
            component: Event,
            meta: [
                { id: 1, name: 'home', path: '/home' },
                { id: 2, name: 'events', path: '/home/events' },                             
                { id: 3, name: 'events', path: '/home/events/:id' },
            ]
        }
    ]
}
export default events