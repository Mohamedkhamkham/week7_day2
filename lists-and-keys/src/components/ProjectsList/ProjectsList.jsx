import { useState } from "react"
import { projectsData } from "../../fakeAPI"

const ProjectsList = () => {

    const [projects, setProjects] = useState(projectsData)

    return (
        <>
            <h1>Listado de proyectos</h1>

            {
                projects.map(elm => {
                    return (
                        <div key={elm._id}>
                            <h3>{elm.name}</h3>
                            <p>Tech Stack: {elm.techStack}</p>
                        </div>
                    )
                })
            }
        </>
    )
}

export default ProjectsList