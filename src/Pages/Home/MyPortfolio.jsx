import data from "../../data/index.json";

export default function MyPortfolio() {
    return <section className="portfolio--section" id="MyPortfolio">
        <div className="portfolio--container-box">
            <div className="portfolio--container">
                <p className="sub--title">Recent Projects</p>
                <h2 className="section--heading">My Portfolio</h2>
            </div>
            <div>
                <button className="btn btn-github" onClick={()=>window.open('https://github.com/PeterZuo0',"_blank")}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                    >
                        <path d="M12 0C5.371 0 0 5.371 0 12c0 5.301 3.438 9.799 8.207 11.387.599.112.793-.26.793-.578 0-.285-.011-1.242-.016-2.25-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.755-1.333-1.755-1.091-.745.084-.729.084-.729 1.205.084 1.84 1.237 1.84 1.237 1.071 1.836 2.809 1.305 3.492.998.108-.776.42-1.305.763-1.605-2.665-.303-5.466-1.332-5.466-5.931 0-1.31.469-2.382 1.237-3.222-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.005-.403 1.022.004 2.048.137 3.005.403 2.292-1.553 3.3-1.23 3.3-1.23.654 1.653.242 2.873.118 3.176.77.84 1.236 1.912 1.236 3.222 0 4.611-2.807 5.624-5.479 5.921.431.372.816 1.102.816 2.222 0 1.605-.015 2.896-.015 3.293 0 .32.193.694.8.576C20.565 21.796 24 17.297 24 12c0-6.629-5.371-12-12-12z"/>
                    </svg>
                    Visit My GitHub
                </button>
            </div>
        </div>
        <div className="portfolio--section--container">
            {data?.portfolio?.map((item, index) => (
                <div key={index} className="portfolio--section--card">
                    <div className="portfolio--section--img">
                        <img src={item.src} alt="Placeholder" />
                    </div>
                    <div className="portfolio--section--card--content">
                        <div>
                            <h3 className="portfolio--section--title">{item.title}</h3>
                            <p className="text-mid">{item.description}</p>
                        </div>
                        <p className="text-sm portfolio--link">
                            {item.link}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 20 19"
                                fill="none"
                            >
                            <path
                                    d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                                    stroke="currentColor"
                                    strokeWidth="2.66667"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </p>
                    </div>
                </div>
            ))}
        </div>
    </section>
}