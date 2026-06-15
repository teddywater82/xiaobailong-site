import React, { useState } from 'react'

const services = [
  {
    icon: '📱',
    title: '小程序开发',
    desc: '微信小程序、支付宝小程序，从轻量展示到复杂商城，灵活适配你的业务场景。',
    tags: ['微信小程序', '支付宝小程序', '商城系统', '预约系统'],
  },
  {
    icon: '🌐',
    title: '网站开发',
    desc: '企业官网、品牌落地页、营销站点，设计驱动开发，兼顾美观与转化。',
    tags: ['企业官网', '品牌站', '落地页', 'H5活动页'],
  },
  {
    icon: '🛒',
    title: '独立站制作',
    desc: '搭建你的专属电商独立站，摆脱平台依赖，建立自有品牌与用户池。',
    tags: ['Shopify', 'WooCommerce', '自建站', '支付对接'],
  },
]

const processSteps = [
  { title: '需求沟通', desc: '了解你的业务和目标' },
  { title: '方案设计', desc: '出原型图和报价方案' },
  { title: '开发落地', desc: '快速迭代、随时沟通' },
  { title: '部署上线', desc: '域名绑定、服务器部署' },
  { title: '交付维护', desc: '交付源码 + 后续技术支持' },
]

const faqData = [
  { q: '不会技术也可以做网站吗？', a: '完全可以。你只需要告诉我需求，我来完成所有的开发和部署工作。域名购买、服务器配置这些我可以全程指导。' },
  { q: '一般开发周期多久？', a: '简单企业站 3-5 天，小程序 5-10 天，电商独立站 7-15 天，具体看功能复杂度。' },
  { q: '提供售后维护吗？', a: '交付后一个月内免费修复 bug，后续维护可以按需协商，也可以提供长期技术托管服务。' },
  { q: '没有设计图怎么办？', a: '不需要设计图。我提供设计+开发一站式服务，你提供参考网站或功能需求即可。' },
  { q: '可以定制功能吗？', a: '当然。所有项目都可以根据你的业务需求来定制，不限于模板功能。' },
]

function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <a href="#" className="logo">
          <span className="logo-icon">🐉</span>
          小白龙建站
        </a>
        <nav className="nav">
          <a href="#services">服务</a>
          <a href="#process">流程</a>
          <a href="#pricing">报价</a>
          <a href="#faq">FAQ</a>
          <a href="#contact" className="nav-cta">立即咨询</a>
        </nav>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <h1>
          不会写代码也能拥有<br />
          <span className="highlight">专业网站 &amp; 小程序</span>
        </h1>
        <p>
          你负责谈客户、做市场，我来完成所有的技术开发。<br />
          小程序 · 网站 · 独立站 — 从需求到上线，一站式搞定。
        </p>
        <div className="hero-actions">
          <a href="#contact" className="btn btn-primary">📩 免费咨询</a>
          <a href="#services" className="btn btn-outline">查看服务</a>
        </div>
      </div>
    </section>
  )
}

function Services() {
  return (
    <section className="section services" id="services">
      <div className="container">
        <h2 className="section-title">我们提供的服务</h2>
        <p className="section-subtitle">从零到一，全栈技术交付。你负责接单，我来落地。</p>
        <div className="services-grid">
          {services.map((s, i) => (
            <div className="service-card" key={i}>
              <div className="service-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <div className="service-tags">
                {s.tags.map((t, j) => <span className="tag" key={j}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Process() {
  return (
    <section className="section process" id="process">
      <div className="container">
        <h2 className="section-title">合作流程</h2>
        <p className="section-subtitle">清晰透明，每个阶段你都知道进度。</p>
        <div className="process-grid">
          {processSteps.map((s, i) => (
            <div className="process-step" key={i}>
              <div className="step-number">{i + 1}</div>
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Pricing() {
  return (
    <section className="section" id="pricing">
      <div className="container">
        <h2 className="section-title">参考报价</h2>
        <p className="section-subtitle">根据功能复杂度灵活定价，以下为起步参考价。</p>
        <div className="pricing-grid">
          <div className="price-card">
            <h3>企业官网</h3>
            <div className="price">¥1,500</div>
            <div className="price-range">起</div>
            <ul className="price-features">
              <li>响应式设计 (PC+手机)</li>
              <li>基础SEO优化</li>
              <li>联系表单 / 地图</li>
              <li>1次修改</li>
            </ul>
            <a href="#contact" className="btn btn-primary" style={{ width: '100%' }}>联系咨询</a>
          </div>
          <div className="price-card featured">
            <h3>小程序开发</h3>
            <div className="price">¥3,000</div>
            <div className="price-range">起</div>
            <ul className="price-features">
              <li>微信 / 支付宝小程序</li>
              <li>商品 / 服务展示</li>
              <li>在线预约 / 下单</li>
              <li>后台管理面板</li>
              <li>提交审核 + 上架</li>
            </ul>
            <a href="#contact" className="btn btn-primary" style={{ width: '100%' }}>联系咨询</a>
          </div>
          <div className="price-card">
            <h3>独立站</h3>
            <div className="price">¥2,000</div>
            <div className="price-range">起</div>
            <ul className="price-features">
              <li>Shopify / 自建站</li>
              <li>商品管理</li>
              <li>支付对接</li>
              <li>域名 + SSL配置</li>
            </ul>
            <a href="#contact" className="btn btn-primary" style={{ width: '100%' }}>联系咨询</a>
          </div>
        </div>
      </div>
    </section>
  )
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="section faq" id="faq">
      <div className="container">
        <h2 className="section-title">常见问题</h2>
        <p className="section-subtitle">你可能想知道的。</p>
        <div className="faq-list">
          {faqData.map((item, i) => (
            <div className="faq-item" key={i}>
              <button
                className={`faq-question ${openIndex === i ? 'open' : ''}`}
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                {item.q}
                <span className="faq-arrow">▼</span>
              </button>
              <div className={`faq-answer ${openIndex === i ? 'open' : ''}`}>
                {item.a}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section className="cta-section" id="contact">
      <div className="container">
        <h2>聊聊你的项目？</h2>
        <p>
          告诉我你的需求，我来评估方案和报价。<br />
          无论项目大小，都认真对待。
        </p>
        <div className="cta-buttons">
          <a href="#" className="btn btn-white" onClick={(e) => { e.preventDefault(); navigator?.clipboard?.writeText?.('teddywater82@163.com') }}>
            📧 teddywater82@163.com
          </a>
          <a href="https://work.weixin.qq.com" target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
            💬 微信联系 (扫码)
          </a>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3>🐉 小白龙建站</h3>
            <p>
              专注小程序、网站、独立站开发与交付。<br />
              你负责前端市场和客户，我负责后端技术落地。<br />
              专业高效，值得信赖。
            </p>
          </div>
          <div className="footer-col">
            <h4>服务</h4>
            <a href="#services">小程序开发</a>
            <a href="#services">网站开发</a>
            <a href="#services">独立站制作</a>
            <a href="#pricing">参考报价</a>
          </div>
          <div className="footer-col">
            <h4>联系</h4>
            <a href="mailto:teddywater82@163.com">teddywater82@163.com</a>
            <a href="#contact">在线咨询</a>
          </div>
        </div>
        <div className="footer-bottom">
          © 2026 小白龙建站. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Process />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
    </>
  )
}
