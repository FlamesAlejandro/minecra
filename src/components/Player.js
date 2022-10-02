import { useSphere } from "@react-three/cannon"
import React, { useRef } from 'react'
import { useFrame, useThree } from "@react-three/fiber"
import { Vector3 } from "three"

export const Player = () => {
    // asignar camara al jugador
    const {camera} = useThree()
    // para representar al jugador usaremos una esfera (por ahora)
    const [ref] = useSphere(() => ({
        mass: 1,
        type: 'Dynamic',
        position: [0, 0, 0]
    }))

    // guardar la posicion del jugador
    const pos = useRef([0, 0, 0])

    // vamos a unir la camara con la posicion del jugador
    useFrame(() => {
        // camera.position.copy(new Vector3(pos.current[0], pos.current[1], pos.current[2]))
    })

    return (
        <mesh ref={ref}></mesh>
    )
}