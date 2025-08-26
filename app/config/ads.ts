// Google AdSense 广告位配置
export const AD_SLOTS = {
  // 头部横幅广告
  HEADER_BANNER: '7085852670', // 替换为你的真实广告位ID
  
  // 侧边栏矩形广告
  SIDEBAR_RECTANGLE: '3668280361',
  
  // 内容中自动广告
  IN_CONTENT_AUTO: '4981362030',
  
  // 底部横幅广告
  FOOTER_BANNER: '6486015399',
  
  // 图片网格间广告
  GRID_INLINE: '3797078775',
  
  // 移动端横幅广告
  MOBILE_BANNER: '3797078775',
}

// 广告配置
export const AD_CONFIG = {
  // 发布者ID
  PUBLISHER_ID: 'ca-pub-8317527679530231',
  
  // 是否启用广告
  ENABLED: true,
  
  // 广告加载延迟（毫秒）
  LOAD_DELAY: 1000,
  
  // 响应式广告设置
  RESPONSIVE: {
    enabled: true,
    fullWidth: true,
  },
  
  // 广告位置配置
  POSITIONS: {
    header: {
      enabled: true,
      slot: AD_SLOTS.HEADER_BANNER,
      format: 'banner' as const,
      className: 'min-h-[90px]',
    },
    sidebar: {
      enabled: true,
      slot: AD_SLOTS.SIDEBAR_RECTANGLE,
      format: 'rectangle' as const,
      className: 'min-h-[250px]',
    },
    inContent: {
      enabled: true,
      slot: AD_SLOTS.IN_CONTENT_AUTO,
      format: 'auto' as const,
      className: 'min-h-[280px]',
    },
    footer: {
      enabled: true,
      slot: AD_SLOTS.FOOTER_BANNER,
      format: 'banner' as const,
      className: 'min-h-[90px]',
    },
    gridInline: {
      enabled: true,
      slot: AD_SLOTS.GRID_INLINE,
      format: 'rectangle' as const,
      className: 'min-h-[250px]',
    },
  },
}

// 页面特定广告配置
export const PAGE_AD_CONFIG = {
  home: {
    positions: ['header', 'inContent', 'footer'],
    frequency: 'normal',
  },
  category: {
    positions: ['header', 'inContent', 'footer'],
    frequency: 'normal',
  },
  favorites: {
    positions: ['header', 'inContent', 'footer'],
    frequency: 'low',
  },
}

// 广告样式配置
export const AD_STYLES = {
  container: {
    display: 'block',
    textAlign: 'center' as const,
    margin: '0 auto',
  },
  responsive: {
    display: 'block',
    overflow: 'hidden',
  },
}
