import {Canvas} from "@react-three/fiber";
import StudioLight from "./three/StudioLight.jsx";
import {features} from "../constants/index.js";
import clsx from "clsx";


const Features = () => {
    return (
        <section className="features">
            <h2>See it all in a new light.</h2>

            <Canvas id="f-canvas" camera={{}}>
                <StudioLight/>
                <ambientLight intensity={0.5}/>
            </Canvas>

            <div className="absolute inset-0">
                {features.map((feature, index) => (
                    <div key={feature.id} className={clsx('box', `box${index + 1}`, feature.styles)}>
                        <img src={feature.icon} alt={feature.highlight} />
                        <p>
                            <span className="text-white">{feature.highlight}</span>
                            {feature.text}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    )
}
export default Features
