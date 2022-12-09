// import React, { useState, useEffect } from "react";
import React, { useState, useEffect } from "react";
import Nav from "../Nav";
import SiswaNav from "../Siswa/Navbar";
import { Input } from "@material-tailwind/react";
import { Select, Option } from "@material-tailwind/react";
import CourseCard from "./CourseCard";
import AuthUser from "../../components/AuthUser";

const SearchKursus = (props) => {
    const [listCourse, setListCourse] = useState([])
    const [currentItems,setCurrentItems] = useState([]);
    const { http } = AuthUser();
    const [filterName,setFilterName] = useState("")
    const [filterKategori,setFilterKategori] = useState("")
    const [filterModeHarga,setFilterModeHarga] = useState("")
    const [filterModeName,setFilterModeName] = useState("")

    const [pageCount,setPageCount] = useState(0);
    const [currentPage,setCurrentPage] = useState(0);

    const paginationUnclick = "page-link relative block py-1.5 px-3 border-0 outline-none transition-all duration-300 rounded bg-white text-gray-800 hover:text-white hover:bg-blue-900 focus:shadow-none"
    const paginationClick = "page-link relative block py-1.5 px-3 border-0 outline-none transition-all duration-300 rounded bg-blue-900 text-white hover:text-white hover:bg-blue-900 focus:shadow-none"

    const repaginate = (index) => {
        const newOffset = (index * 10);
        const endOffset = newOffset + 10; //10 items per page
        setCurrentItems(listCourse.slice(newOffset, endOffset))
        setCurrentPage(index)
      };

    //to fetch all available courses
    const fetchDataKursus = () => {
        http.post("/get/kursus",{
            name:filterName,
            kategori:filterKategori,
            modeHarga:filterModeHarga,
            modeName:filterModeName
        }).then((res) => {
            setListCourse(res.data.kursus)
            setPageCount(Math.ceil(res.data.kursus.length / 10))
            console.log(res.data.kursus.length)
        });

    };

    const goTo = (dir) => {
        if(dir == 'prev'){
            //check if prev is valid
            if(currentPage > 0){
                
            }
        }
        else if (dir == 'next'){
            //check if next is valid
        }
    }


    useEffect(() => {
        fetchDataKursus();
    }, []);

    useEffect(() => {
        repaginate(0)
        setCurrentPage(0)
    }, [listCourse]);

    useEffect(() => {
        console.log("masuk");
        fetchDataKursus();
    }, [filterName,filterKategori,filterModeHarga,filterModeName]);



    return (
        <div className="min-h-screen h-auto w-full bg-gray-100 flex flex-col">
            {props.isSiswa != null && <SiswaNav></SiswaNav>}
            {props.isSiswa == null && (
                <div className="px-4 sm:px-16 md:px-24 drawer-side bg-custom-blue overflow-y-auto flex-none">
                    <Nav></Nav>
                </div>
            )}
            <div className="bg-gray-100 overflow-x-hidden h-auto px-4 sm:px-14 md:px-20">
                <div className="bg-blue-100 px-7 py-7 w-full z-0 my-10 border-2 rounded-md">
                    <span className="text-2xl font-bold">Semua Kursus</span>
                </div>
                <div>
                    <form action="" method="post">
                        <div className="flex gap-x-4">
                            <div className="w-3/6">
                                <Input
                                    label="Cari Kursus"
                                    type="text"
                                    className="form-select appearance-none px-4 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat focus:outline-none"
                                    onChange={(e)=>setFilterName(e.target.value)}
                                />
                            </div>
                            <div className="w-1/6">
                                <Select
                                    label="Kategori"
                                    className="form-select appearance-none px-4 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat rounded-md focus:outline-none"
                                    value="" onChange={(e)=>setFilterKategori(e)}
                                >
                                     <Option value="">
                                            Semua
                                     </Option>
                                     <Option value="Teknologi Informasi">
                                            Teknologi Informasi
                                        </Option>
                                        <Option value="Bisnis dan Ekonomi">
                                            Bisnis dan Ekonomi
                                        </Option>
                                        <Option value="Logika dan Matematika">
                                            Logika dan Matematika
                                        </Option>
                                        <Option value="Bahasa dan Literatur">
                                            Bahasa dan Literatur
                                        </Option>
                                        <Option value="Fisika dan Teknik">
                                            Fisika dan Teknik
                                        </Option>
                                        <Option value="Pengembangan Diri">
                                            Pengembangan Diri
                                        </Option>
                                        <Option value="Kesehatan">
                                            Kesehatan
                                        </Option>
                                        <Option value="Kesenian">
                                            Kesenian
                                        </Option>
                                </Select>
                            </div>
                            <div className="w-1/6">
                                <Select
                                    label="Harga"
                                    className="form-select appearance-none px-4 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat rounded-md focus:outline-none"
                                    value="" onChange={(e)=>setFilterModeHarga(e)}
                                >
                                    <Option value="">Semua</Option>
                                    <Option value="desc">Tertinggi</Option>
                                    <Option value="asc">Terendah</Option>
                                </Select>
                            </div>
                            <div className="w-1/6">
                                <Select
                                    label="Urutkan"
                                    className="form-select appearance-none px-4 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat rounded-md focus:outline-none"
                                    value="" onChange={(e)=>setFilterModeName(e)}
                                >
                                    <Option value="">Semua</Option>
                                    <Option value="asc">Asc</Option>
                                    <Option value="desc">Desc</Option>
                                </Select>
                            </div>
                        </div>
                    </form>

                    <div class="mt-10 flex flex-wrap gap-10 w-full">
                        {currentItems.map((n, index) => {
                            return <CourseCard course={n} key={index} />;
                        })}
                    </div>

                    <div class="flex justify-center mt-24 mb-10">
                        <nav aria-label="Page navigation example">
                            <ul class="flex list-style-none">
                            <li class="page-item">
                                    <a
                                        class="page-link relative block py-1.5 px-3 border-0 outline-none transition-all duration-300 rounded bg-white text-gray-800 hover:text-white hover:bg-blue-900 focus:shadow-none"
                                        href="#"
                                        aria-label="Previous"
                                    >
                                        <span aria-hidden="true">&laquo;</span>
                                    </a>
                                </li>
                            {Array.from({ length: pageCount }).map((it, index) =>
                                <li class="page-item">
                                   <a
                                        class={index == currentPage ? paginationClick:paginationUnclick}
                                        href="#"
                                        onClick={()=>repaginate(index)}
                                    >
                                        {index+1}
                                    </a>
                                </li>
                            )}
                                <li class="page-item">
                                    <a
                                        class="page-link relative block py-1.5 px-3 border-0 outline-none transition-all duration-300 rounded bg-white text-gray-800 hover:text-white hover:bg-blue-900 focus:shadow-none"
                                        href="#"
                                        aria-label="Next"
                                    >
                                        <span aria-hidden="true">&raquo;</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchKursus;
