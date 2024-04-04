import React from 'react';

function PageBanner({ bannerBg, currentPage, heading }) {

    const renderNav = (currentPage && heading) && <nav>
    <ol className="breadcrumb">
        <li className="breadcrumb-item">
            <a href="index.html">Home</a>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
            {currentPage}
        </li>
    </ol>
</nav>
    return (
        <section
            className="page-banner-wrap bg-cover"
            style={{ backgroundImage: `url(${bannerBg})` }}
        >
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-12">
                        <div className="breadcrumb-wrap">
                           {renderNav}
                        </div>

                        <div className="page-heading text-white">
                            <h1 className='relative'>{heading}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PageBanner;
