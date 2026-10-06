import Image from "next/image";
import Link from "next/link";

export default function Intro() {
  return (
    <section className="relative grid gap-x-12 pt-12 sm:pt-16 lg:grid-cols-[1fr_420px] lg:pt-20">
      {/* 구분선은 사진 위에 그려서 끊기지 않게 한다 */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-px bg-ink"
      />

      <div className="pb-10 lg:pb-16">
        <h1 className="text-[40px] font-bold leading-[1.1] tracking-tight sm:text-[52px]">
          위승주
        </h1>

        <div className="mt-7 max-w-[35em] space-y-4 text-[17px] leading-[1.85] text-copy">
          <p>
            AI를 활용해 문제 정의부터 기획, 개발, 출시까지 직접 하는 PM입니다.
          </p>
          <p>
            현재{" "}
            <Link href="/experience/likelion" className="link text-ink">
              멋쟁이사자처럼
            </Link>
            에서 베트남 IT 인재와 한국 기업을 잇는 채용 플랫폼{" "}
            <a
              href="https://salary-fyi.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="link whitespace-nowrap text-ink"
            >
              Salary FYI
            </a>
            를 맡아, 출시 5개월 만에 가입 8,800명, 채용 지원 1만 건을
            만들었습니다. 이전에는{" "}
            <Link href="/experience/planfit" className="link text-ink">
              Planfit
            </Link>
            에서 70건이 넘는 실험으로 유료 구독 전환율을 개선했습니다.
          </p>
          <p>
            팔로워 1만 미식 매거진{" "}
            <Link href="/projects/gourmevel" className="link text-ink">
              고메블
            </Link>
            과 와인 큐레이팅 앱{" "}
            <Link href="/projects/drinkig" className="link text-ink">
              드링키지
            </Link>
            를 직접 만들어 운영합니다.
          </p>
        </div>

        <p className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
          <a
            href="mailto:wsj@likelion.net"
            className="bg-ink px-4 py-2.5 font-medium text-paper transition-colors hover:bg-copy"
          >
            이메일
          </a>
          <Link href="/resume" className="link">
            이력서
          </Link>
          <a
            href="https://www.linkedin.com/in/wiseungju/"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            LinkedIn ↗
          </a>
        </p>
      </div>

      {/* 상반신이 아래 구분선 위에 서 있도록 바닥에 붙인다 */}
      <div className="ml-auto w-64 self-end sm:w-80 lg:w-full">
        <div className="aspect-[6/7] overflow-hidden">
          <Image
            src="/images/profile-cutout.png"
            alt="위승주 프로필 사진"
            width={1100}
            height={1375}
            loading="eager"
            sizes="(max-width: 640px) 256px, (max-width: 1024px) 320px, 420px"
            className="h-auto w-full"
          />
        </div>
      </div>
    </section>
  );
}
