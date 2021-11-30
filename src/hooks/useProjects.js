import { useEffect, useState } from 'react';

const useProjects = () => {
    //set data in services
    const [projects, setProjects] = useState([])
    //fetch data from fajedb json file
    useEffect(() => {
        fetch('https://myreactportfoliosite2.herokuapp.com/projects')
            .then(response => response.json())
            .then(data => setProjects(data))
    }, [])

    return [projects, setProjects]
}

export default useProjects;