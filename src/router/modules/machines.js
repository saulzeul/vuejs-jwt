import Machines from '@/views/Machines'
import Machine from '@/views/Machines/id'
import TiemposMuertos from '@/views/Machines/tm'
const machines = {
    path: '/machines',
    name: 'maquinas',
    meta: 'maquinas',
    component: Machines,
    children: [
        {
            path: ':maquina',
            name: 'hmi',
            component: Machine,
            meta: 'maquina',
            children: [
                {
                    path: 'tm',
                    name: 'tm',
                    component: TiemposMuertos,
                    meta: 'tiempos muertos'          
                }                
            ]
        }        
    ]
}
export default machines