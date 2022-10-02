import { usePlane } from "@react-three/cannon"
import { RepeatWrapping } from "three"

export const Ground = () => {
    const [ref] = usePlane(() => ({
        // dejamos el piso a nivel del horizonte, con rotation
        rotation: [-Math.PI / 4 ,0 ,0], position: [0, 0, 0]
    }))

    // quitar el blooring de la textura, para que se vea pixeleado
    groundTexture.magFilter = NearestFilter
    // repetir la textura del piso
    groundTexture.wrapS = RepeatWrapping
    groundTexture.wrapT = RepeatWrapping
    groundTexture.repeat.set(100, 100)


    return (
        <mesh ref={ref}>
            <planeBufferGeometry attach='geometry' args={[100, 100]} />
            <meshStandardMaterial attach='material' map={groundTexture} />
        </mesh>
    )
}