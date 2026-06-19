export type WorkLink = {
  label: string;
  href: string;
};

export type Work = {
  slug: string;
  title: string;
  org: string;
  summary: string;
  description: string;
  thumbnail: string;
  links: WorkLink[];
};

export const works: Work[] = [
  {
    slug: "haptic-system",
    title:
      "초실감 메타버스 구현을 위한 촉감 표준 및 고충실도 통합 햅틱 시스템 개발",
    org: "한국표준과학연구원",
    summary: "촉감 표준 및 고충실도 통합 햅틱 시스템 UX 설계",
    description:
      "한국표준과학연구원과 협력하여 초실감 메타버스 구현을 위한 촉감 표준 및 고충실도 통합 햅틱 시스템의 사용자 경험을 설계했습니다. 다양한 촉각 자극의 지각적·정서적 효과를 실험적으로 검증하고, 개발자와 연구자가 공통으로 활용할 수 있는 UX 가이드라인과 평가 프레임워크를 수립했습니다.",
    thumbnail: "/works/work-1.png",
    links: [
      { label: "Behance", href: "https://behance.net" },
      { label: "GitHub", href: "https://github.com" },
    ],
  },
  {
    slug: "mobility-checklist",
    title: "총합 상품성 평가를 위한 체크리스트 개발",
    org: "현대모비스",
    summary: "차량 UX 총합 상품성 평가를 위한 체계적 체크리스트 개발",
    description:
      "현대모비스와 함께 총합 상품성 평가를 위한 UX 체크리스트를 개발했습니다. 다양한 이해관계자(디자이너, 엔지니어, 기획자)가 일관된 기준으로 차량 사용자 경험을 평가할 수 있도록, 정량·정성 지표를 통합한 평가 프레임워크와 디지털 체크리스트 도구를 설계했습니다.",
    thumbnail: "/works/work-3.png",
    links: [{ label: "Behance", href: "https://behance.net" }],
  },
  {
    slug: "vr-motion-authoring",
    title: "가상현실을 위한 물리적·지각·감성적 동작 효과의 자동 저작",
    org: "삼성전자",
    summary: "VR 환경에서 물리·지각·감성적 동작 효과의 자동 생성 UX",
    description:
      "삼성전자에서 가상현실을 위한 물리적 및 지각/감성적 동작 효과의 자동 저작 도구 UX를 설계했습니다. 복잡한 모션 파라미터를 직관적인 인터페이스로 추상화하고, 디자이너와 연구자가 반복 실험 없이도 원하는 감성적 효과를 빠르게 프로토타이핑할 수 있는 워크플로우를 구축했습니다.",
    thumbnail: "/works/work-2.png",
    links: [
      { label: "Dribbble", href: "https://dribbble.com" },
      { label: "GitHub", href: "https://github.com" },
    ],
  },
  {
    slug: "blockchain-platform",
    title:
      "크로스 도메인 호환성을 위한 블록체인 플랫폼 및 비즈니스 모델 개발",
    org: "정보통신기획평가원",
    summary: "크로스 도메인 호환 블록체인 플랫폼 UX 및 비즈니스 모델 설계",
    description:
      "정보통신기획평가원과 함께 크로스 도메인 호환성을 위한 블록체인 플랫폼 및 비즈니스 모델 개발 프로젝트에서 사용자 경험을 설계했습니다. 복잡한 분산 원장 기술을 이해관계자가 직관적으로 파악할 수 있는 정보 구조와 인터랙션 모델을 수립하고, 다양한 도메인 간 데이터 교환 워크플로우를 시각화했습니다.",
    thumbnail: "/works/work-4.png",
    links: [
      { label: "Behance", href: "https://behance.net" },
      { label: "GitHub", href: "https://github.com" },
    ],
  },
  {
    slug: "iot-walking-aid",
    title: "교통약자의 보행 경험 향상을 위한 IoT 기반 보행 지원 도구 개발",
    org: "한국연구재단",
    summary: "교통약자 보행 경험 향상을 위한 IoT 기반 보행 지원 도구 UX",
    description:
      "한국연구재단 지원 프로젝트에서 교통약자의 보행 경험 향상을 위한 IoT 기반 보행 지원 도구의 사용자 경험을 설계했습니다. 실제 보행 환경에서의 사용성을 중심으로, 센서 데이터 피드백과 경로 안내를 직관적으로 전달하는 모바일·웨어러블 인터페이스를 개발하고 현장 사용자 테스트를 통해 반복 개선했습니다.",
    thumbnail: "/works/work-5.png",
    links: [{ label: "Dribbble", href: "https://dribbble.com" }],
  },
];

export function getWork(slug: string): Work | undefined {
  return works.find((work) => work.slug === slug);
}
