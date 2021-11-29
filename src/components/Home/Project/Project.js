import React from 'react';

const Project = (props) => {
    const { _id, name, picture1, about } = props.project;
    return (
        <>

            <div class="col-lg-4 col-md-6 portfolio-item filter-app">
                <div class="portfolio-wrap">
                    <img src={picture1} class="img-fluid" alt="" />
                    <div class="portfolio-links">
                        <a href={"picture1"} data-gallery="portfolioGallery" class="portfolio-lightbox" title="App 1"><i class="bx bx-plus"></i></a>
                        <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Project;