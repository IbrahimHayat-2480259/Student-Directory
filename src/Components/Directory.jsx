import StudentCard from "./StudentCard";
import Pagination from "./Pagination";

function Directory() {

    return(
        <div className="container mt-5">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2>Page Header</h2>
                <button className="btn btn-primary">Add New Students</button>
            </div>
                
            <div className="row">

                    <div className="col-md-6 col-lg-3 mb-4">
                        <StudentCard
                        id={101}
                        name="Zakir"
                        major="CS"
                        year={2}
                        gpa={3.7}
                        />
                    </div>

                    <div className="col-md-6 col-lg-3 mb-4">
                        <StudentCard
                        id={102}
                        name="Zubair"
                        major="SE"
                        year={3}
                        gpa={3.8}
                        />
                    </div>

                    <div className="col-md-6 col-lg-3 mb-4">
                        <StudentCard
                        id={103}
                        name="Zahid"
                        major="BBA"
                        year={4}
                        gpa={3.9}
                        />
                    </div>

                    <div className="col-md-6 col-lg-3 mb-4">
                        <StudentCard
                        id={104}
                        name="Zain"
                        major="MBA"
                        year={1}
                        gpa={4.0}
                        />
                    </div>

            </div>

            <Pagination/>

        </div>
    );
}
export default Directory;