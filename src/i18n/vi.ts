// Từ điển tiếng Việt — toàn bộ text UI của portfolio

export const vi = {
  meta: {
    title: "Cao Xuân Dự — Full-Stack Developer Intern",
    description:
      "Portfolio của Cao Xuân Dự — Full-Stack Developer Intern với React, TypeScript, Node.js, NestJS, PHP.",
  },

  header: {
    connect: "Liên hệ",
    openMenu: "Mở menu",
    closeMenu: "Đóng menu",
  },

  footer: {
    builtBy: "Thiết kế & xây dựng bởi CXD · Next.js",
    rights: "Bản quyền",
  },

  nav: {
    capabilities: "Năng lực",
    projects: "Dự án",
    approach: "Cách làm việc",
    experience: "Kinh nghiệm",
    contact: "Liên hệ",
  },

  hero: {
    badge: "CXD · LẬP TRÌNH VIÊN",
    viewProjects: "Xem dự án",
    contactMe: "Liên hệ ngay",
  },

  interactive: {
    windowTitle: "~/cxd.dev — bash",
    promptUser: "guest",
    prompt: "$",
    whoamiPrompt: "whoami",
    whoamiResult: "cao-xuan-du  // lập trình viên full-stack",
    aboutPrompt: "cat about.txt",
    aboutName: "Họ tên  : Cao Xuân Dự",
    aboutRole: "Vai trò  : Full-Stack Developer Intern",
    aboutStack: "Stack    : React, TypeScript, Node.js, PHP",
    aboutFocus: "Tập trung: API · cơ sở dữ liệu · hệ thống mở rộng",
    lsPrompt: "ls projects/",
    lsTravelmind: "drwxr-xr-x  travelmind/",
    lsAura: "drwxr-xr-x  aura-screening/",
    lsBookings: "drwxr-xr-x  bookings-tickets/",
    shortcut: "Nhấn ⌘ + K · Ctrl + K · để mở command palette",
  },

  sections: {
    capabilities: {
      index: "01",
      label: "năng lực",
      title: "Kỹ năng & Công cụ",
      description:
        "Những kỹ năng và ngôn ngữ lập trình tôi đã sử dụng trong các dự án.",
    },
    projects: {
      index: "02",
      label: "dự án",
      title: "Dự án nổi bật",
      description:
        "Các dự án full-stack tôi đã xây dựng để thực hành và thể hiện kỹ năng.",
      featured: "★ nổi bật",
      repo: "repo",
      otherProjects: "Dự án khác",
      code: "Mã nguồn",
      demo: "Demo",
    },
    approach: {
      index: "03",
      label: "cách làm việc",
      title: "Quy trình làm việc",
      description:
        "Quy trình tôi áp dụng khi nhận task hoặc xây dựng tính năng mới.",
    },
    experience: {
      index: "04",
      label: "kinh nghiệm",
      title: "Kinh nghiệm & Học vấn",
      description:
        "Hành trình học tập và làm việc của tôi trong lĩnh vực phát triển web.",
    },
    contact: {
      index: "05",
      label: "liên hệ",
      title: "Liên hệ",
      description:
        "Bạn có dự án, cơ hội thực tập hoặc muốn trao đổi? Gửi tin nhắn cho tôi.",
    },
  },

  capabilities: {
    frontend: {
      title: "Phát triển Frontend",
      description:
        "Xây dựng giao diện responsive, dễ tiếp cận với các framework hiện đại. Tập trung vào kiến trúc component, quản lý state và style chuẩn với Tailwind.",
    },
    backend: {
      title: "Phát triển Backend",
      description:
        "Thiết kế và xây dựng RESTful API với xác thực, phân quyền theo vai trò, validation và kiến trúc phân lớp rõ ràng. Bảo mật là mặc định.",
    },
    database: {
      title: "Cơ sở dữ liệu",
      description:
        "Mô hình hóa dữ liệu, tối ưu truy vấn, migration và quan hệ giữa các bảng. Kinh nghiệm thực tế với PostgreSQL và MySQL.",
    },
    devops: {
      title: "DevOps & Công cụ",
      description:
        "Đóng gói ứng dụng với Docker / Docker Compose theo cấu trúc monorepo. Quản lý phiên bản với Git, quy trình CI-friendly.",
    },
  },

  approachSteps: {
    understand: {
      title: "Hiểu yêu cầu",
      description:
        "Làm rõ nghiệp vụ, các trường hợp biên và ràng buộc kỹ thuật trước khi viết code.",
    },
    design: {
      title: "Thiết kế trước",
      description:
        "Thiết kế schema database, hợp đồng API và kiến trúc phân lớp để tránh phải refactor tốn kém về sau.",
    },
    build: {
      title: "Xây dựng tăng dần",
      description:
        "Triển khai tính năng tăng dần, test sớm và tích hợp liên tục.",
    },
    review: {
      title: "Review & Tối ưu",
      description:
        "Code review, profiling truy vấn và tối ưu dựa trên số liệu thực tế.",
    },
  },

  projectsData: {
    travelmind: {
      title: "TravelMind — Trình lên kế hoạch du lịch AI",
      description:
        "Nền tảng lập kế hoạch du lịch bằng AI full-stack. Người dùng tạo lịch trình cá nhân hóa theo điểm đến, ngân sách và sở thích thông qua Google Gemini. Backend NestJS + PostgreSQL + Prisma với xác thực JWT & phân quyền (User/Admin). Frontend đa ngôn ngữ trên React 18 + TypeScript + TailwindCSS. Đóng gói Docker / Docker Compose trong monorepo.",
    },
    aura: {
      title: "AURA — Hệ thống sàng lọc võng mạc",
      description:
        "Nền tảng y tế cho phòng khám và bác sĩ. Xây dựng giao diện xác thực bảo mật (đăng nhập/đăng ký), tinh chỉnh giao diện thông báo theo thời gian thực, sửa các lỗi UI/UX quan trọng trong quản lý người dùng, và dựng bảng điều khiển toàn diện cho bác sĩ và phòng khám.",
    },
    bookings: {
      title: "BookingsTickets — Đặt vé xem phim",
      description:
        "Website đặt vé xem phim full-stack: quản lý phiên chiếu, xác thực bảo mật (User/Admin với mã hóa mật khẩu), phân trang, trang chủ động và quy trình đặt vé có chọn combo. Refactor frontend bằng cách tách CSS/JS thành các file modular, cải thiện responsive và hiệu năng tổng thể.",
    },
  },

  experienceData: {
    education: {
      role: "Công nghệ Thông tin",
      company:
        "Trường Đại học Giao thông vận tải TP. HCM (UTH)",
      period: "2023 — 2027",
      description: [
        "Sinh viên ngành Công nghệ Thông tin tại UTH, chuyên ngành Kỹ thuật phần mềm và phát triển web full-stack.",
        "Các môn học: Cấu trúc dữ liệu & Giải thuật, Cơ sở dữ liệu, OOP, Công nghệ Web, Kỹ thuật phần mềm.",
      ],
    },
    personal: {
      role: "Full-Stack Developer (Dự án cá nhân)",
      company: "Tự thực hiện",
      period: "2025 — nay",
      description: [
        "TravelMind — nền tảng lập kế hoạch du lịch AI với NestJS, PostgreSQL, Prisma và React 18; tích hợp Google Gemini API.",
        "AURA Retinal Screening System — UI y tế với xác thực bảo mật, dashboard và luồng thông báo.",
        "BookingsTickets — đặt vé xem phim bằng PHP + MySQL với bảng điều khiển admin phân quyền và frontend modular.",
      ],
    },
  },

  contactFields: {
    email: "Email",
    phone: "Điện thoại",
    location: "Địa chỉ",
    locationValue: "TP. Hồ Chí Minh, Việt Nam",
    availability: "Tình trạng",
    availabilityValue: "Sẵn sàng cho thực tập & vị trí full-stack",
  },

  profile: {
    typingPhrases: [
      "Sinh viên Đại học Giao thông vận tải TP.HCM (UTH)",
      "Full-Stack Developer Intern — React, TypeScript, Node.js & PHP.",
      "Xây dựng ứng dụng web bảo mật, mở rộng với NestJS & PostgreSQL.",
    ],
    focusLine: "Công nghệ Thông tin · UTH",
  },

  logo: {
    subtitle: "full stack developer intern",
  },

  languageSwitcher: {
    label: "Ngôn ngữ",
    english: "EN",
    vietnamese: "VI",
  },
};

// Interface rộng — cho phép tiếng Anh dùng chung shape nhưng string khác nhau.
// `vi` giữ nguyên giá trị làm "source of truth" cho layout; `en` sẽ dùng `satisfies Dictionary`.
export interface Dictionary {
  meta: {
    title: string;
    description: string;
  };
  header: {
    connect: string;
    openMenu: string;
    closeMenu: string;
  };
  footer: {
    builtBy: string;
    rights: string;
  };
  nav: {
    capabilities: string;
    projects: string;
    approach: string;
    experience: string;
    contact: string;
  };
  hero: {
    badge: string;
    viewProjects: string;
    contactMe: string;
  };
  interactive: {
    windowTitle: string;
    promptUser: string;
    prompt: string;
    whoamiPrompt: string;
    whoamiResult: string;
    aboutPrompt: string;
    aboutName: string;
    aboutRole: string;
    aboutStack: string;
    aboutFocus: string;
    lsPrompt: string;
    lsTravelmind: string;
    lsAura: string;
    lsBookings: string;
    shortcut: string;
  };
  sections: {
    capabilities: { index: string; label: string; title: string; description: string };
    projects: {
      index: string;
      label: string;
      title: string;
      description: string;
      featured: string;
      repo: string;
      otherProjects: string;
      code: string;
      demo: string;
    };
    approach: { index: string; label: string; title: string; description: string };
    experience: { index: string; label: string; title: string; description: string };
    contact: { index: string; label: string; title: string; description: string };
  };
  capabilities: {
    frontend: { title: string; description: string };
    backend: { title: string; description: string };
    database: { title: string; description: string };
    devops: { title: string; description: string };
  };
  approachSteps: {
    understand: { title: string; description: string };
    design: { title: string; description: string };
    build: { title: string; description: string };
    review: { title: string; description: string };
  };
  projectsData: {
    travelmind: { title: string; description: string };
    aura: { title: string; description: string };
    bookings: { title: string; description: string };
  };
  experienceData: {
    education: {
      role: string;
      company: string;
      period: string;
      description: string[];
    };
    personal: {
      role: string;
      company: string;
      period: string;
      description: string[];
    };
  };
  contactFields: {
    email: string;
    phone: string;
    location: string;
    locationValue: string;
    availability: string;
    availabilityValue: string;
  };
  profile: {
    typingPhrases: readonly string[];
    focusLine: string;
  };
  logo: {
    subtitle: string;
  };
  languageSwitcher: {
    label: string;
    english: string;
    vietnamese: string;
  };
}
