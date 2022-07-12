import Link from "next/dist/client/link"
import React from "react"

export default function Footer() {
  return (
    <div className="section-footer mt-20 py-10 w-full bg-black">
      <div className="container grid grid-cols-2 text-center md:text-start md:grid-cols-3 gap-2 max-w-1170px m-auto px-5">
        <div className="section1-rule">
          <div className="company-logo mb-2.5 flex justify-center md:block">
            <img
              alt=""
              className="w-36 h-16"
              src="https://news.sabay.com.kh/img/footer-logo.png"
            />
          </div>
          <div className="small text-gray-400 font-hanuman mb-4">
            រក្សាសិទ្ធគ្រប់យ៉ាងដោយ​ Sabay ឆ្នាំ២០១៦
          </div>
          <div className="privacy-policy font-bold text-gray-400 font-hanuman mb-4">
            គោលការណ៍ភាពឯកជន | Privacy Policy
          </div>
          <div className="address-lable text-gray-400 font-hanuman">
            អាស័យដ្ធាន
          </div>
          <div className="address font-bold font-hanuman mb-4">
            អគារលេខ​ ៣០៦ មហាវិថីព្រះមុន្នីវង្ស សង្កាត់បឺងរាំង ខណ្ឌដូនពេញ
          </div>
        </div>
        <div className="section2-about hidden md:block">
          <h4 className="text-xl font-semibold font-kulen mb-5 text-gray-400">
            អំពីយើង
          </h4>
          <h6 className="text-gray-400 font-hanuman mb-3.5">
            <strong>Sabay Digital Cooperation</strong>{" "}
            ជា​ក្រុមហ៊ុន​ព័ត៌មាន​ឌីជីថល និង​កម្សាន្ត​ឈាន​មុខ​គេ​នៅ​កម្ពុជា។
          </h6>
          <h6 className="text-gray-400 font-hanuman mb-3.5">
            ផលិត​ផល​ និង​ សេវាកម្ម របស់ Sabay
          </h6>

          <Link href="/">
            <img
              alt=""
              width="40px"
              height="40px"
              src="https://news.sabay.com.kh/img/logo.png"
            />
          </Link>
        </div>
        <div className="section3-contact">
          <h4 className="text-xl font-semibold font-kulen mb-5 text-gray-400">
            ជួបគ្នានៅបណ្ដាញសង្គម
          </h4>
          <ul className="flex justify-center md:justify-start space-x-2 mb-3.5">
            <li>
              <Link href="/">
                <span className="text-2xl">
                  <i className="fa-brands fa-facebook" />
                </span>
              </Link>
            </li>
            <li>
              <Link href="/">
                <span className="text-2xl">
                  <i className="fa-brands fa-instagram" />
                </span>
              </Link>
            </li>
            <li>
              <Link href="/">
                <span className="text-2xl">
                  <i className="fa-brands fa-youtube-square" />
                </span>
              </Link>
            </li>
            <li>
              <Link href="/">
                <span className="text-2xl">
                  <i className="fa-brands fa-tiktok" />
                </span>
              </Link>
            </li>
            <li>
              <Link href="/">
                <span className="text-2xl">
                  <i className="fa-brands fa-telegram" />
                </span>
              </Link>
            </li>
          </ul>
          <div className="small">
            <h6 className="text-gray-400 font-hanuman">ទំនាក់ទំនង</h6>
            <p>info@sabay.com</p>
            <p>023 228 000</p>
          </div>
        </div>
      </div>
    </div>
  )
}
