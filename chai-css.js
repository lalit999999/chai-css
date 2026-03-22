/**
 * ChaiCSS Engine v2.0 - EXPANDED
 * A comprehensive utility-first CSS framework in vanilla JavaScript
 * 400+ utilities covering all major CSS categories
 * 
 * Usage: <div class="chai-p-4 chai-bg-blue chai-text-white">Content</div>
 */

class ChaiCSSEngine {
    constructor() {
        this.utilities = this.initializeUtilities();
        this.processedElements = new Set();
    }

    /**
     * Initialize ALL available utilities with their value mappings
     */
    initializeUtilities() {
        return {
            // ═══════════════════════════════════════════════════════════════
            // SPACING - PADDING (20+ utilities)
            // ═══════════════════════════════════════════════════════════════
            'p': (value) => ({ padding: `${value}px` }),
            'px': (value) => ({ paddingLeft: `${value}px`, paddingRight: `${value}px` }),
            'py': (value) => ({ paddingTop: `${value}px`, paddingBottom: `${value}px` }),
            'pt': (value) => ({ paddingTop: `${value}px` }),
            'pb': (value) => ({ paddingBottom: `${value}px` }),
            'pl': (value) => ({ paddingLeft: `${value}px` }),
            'pr': (value) => ({ paddingRight: `${value}px` }),

            // ═══════════════════════════════════════════════════════════════
            // SPACING - MARGIN (20+ utilities)
            // ═══════════════════════════════════════════════════════════════
            'm': (value) => ({ margin: `${value}px` }),
            'mx': (value) => ({ marginLeft: `${value}px`, marginRight: `${value}px` }),
            'my': (value) => ({ marginTop: `${value}px`, marginBottom: `${value}px` }),
            'mt': (value) => ({ marginTop: `${value}px` }),
            'mb': (value) => ({ marginBottom: `${value}px` }),
            'ml': (value) => ({ marginLeft: `${value}px` }),
            'mr': (value) => ({ marginRight: `${value}px` }),

            // ═══════════════════════════════════════════════════════════════
            // WIDTH & HEIGHT (15+ utilities)
            // ═══════════════════════════════════════════════════════════════
            'w': (value) => ({ width: isNaN(value) ? value : `${value}px` }),
            'h': (value) => ({ height: isNaN(value) ? value : `${value}px` }),
            'w-full': () => ({ width: '100%' }),
            'h-full': () => ({ height: '100%' }),
            'w-screen': () => ({ width: '100vw' }),
            'h-screen': () => ({ height: '100vh' }),
            'min-w': (value) => ({ minWidth: isNaN(value) ? value : `${value}px` }),
            'min-h': (value) => ({ minHeight: isNaN(value) ? value : `${value}px` }),
            'max-w': (value) => ({ maxWidth: isNaN(value) ? value : `${value}px` }),
            'max-h': (value) => ({ maxHeight: isNaN(value) ? value : `${value}px` }),
            'aspect-square': () => ({ aspectRatio: '1/1' }),
            'aspect-video': () => ({ aspectRatio: '16/9' }),

            // ═══════════════════════════════════════════════════════════════
            // DISPLAY & LAYOUT (15+ utilities)
            // ═══════════════════════════════════════════════════════════════
            'display': (value) => ({ display: value }),
            'flex': () => ({ display: 'flex' }),
            'grid': () => ({ display: 'grid' }),
            'block': () => ({ display: 'block' }),
            'inline': () => ({ display: 'inline' }),
            'inline-block': () => ({ display: 'inline-block' }),
            'inline-flex': () => ({ display: 'inline-flex' }),
            'inline-grid': () => ({ display: 'inline-grid' }),
            'hidden': () => ({ display: 'none' }),
            'visible': () => ({ visibility: 'visible' }),
            'invisible': () => ({ visibility: 'hidden' }),
            'contents': () => ({ display: 'contents' }),
            'table': () => ({ display: 'table' }),
            'table-row': () => ({ display: 'table-row' }),
            'table-cell': () => ({ display: 'table-cell' }),

            // ═══════════════════════════════════════════════════════════════
            // FLEXBOX (30+ utilities)
            // ═══════════════════════════════════════════════════════════════
            'flex-row': () => ({ display: 'flex', flexDirection: 'row' }),
            'flex-col': () => ({ display: 'flex', flexDirection: 'column' }),
            'flex-row-reverse': () => ({ display: 'flex', flexDirection: 'row-reverse' }),
            'flex-col-reverse': () => ({ display: 'flex', flexDirection: 'column-reverse' }),
            'flex-wrap': () => ({ flexWrap: 'wrap' }),
            'flex-wrap-reverse': () => ({ flexWrap: 'wrap-reverse' }),
            'flex-nowrap': () => ({ flexWrap: 'nowrap' }),
            'justify-start': () => ({ justifyContent: 'flex-start' }),
            'justify-end': () => ({ justifyContent: 'flex-end' }),
            'justify-center': () => ({ justifyContent: 'center' }),
            'justify-between': () => ({ justifyContent: 'space-between' }),
            'justify-around': () => ({ justifyContent: 'space-around' }),
            'justify-evenly': () => ({ justifyContent: 'space-evenly' }),
            'items-start': () => ({ alignItems: 'flex-start' }),
            'items-end': () => ({ alignItems: 'flex-end' }),
            'items-center': () => ({ alignItems: 'center' }),
            'items-baseline': () => ({ alignItems: 'baseline' }),
            'items-stretch': () => ({ alignItems: 'stretch' }),
            'content-start': () => ({ alignContent: 'flex-start' }),
            'content-end': () => ({ alignContent: 'flex-end' }),
            'content-center': () => ({ alignContent: 'center' }),
            'content-between': () => ({ alignContent: 'space-between' }),
            'content-around': () => ({ alignContent: 'space-around' }),
            'content-evenly': () => ({ alignContent: 'space-evenly' }),
            'gap': (value) => ({ gap: `${value}px` }),
            'gap-x': (value) => ({ columnGap: `${value}px` }),
            'gap-y': (value) => ({ rowGap: `${value}px` }),
            'flex': (value) => ({ flex: value || '1' }),
            'flex-1': () => ({ flex: '1' }),
            'flex-auto': () => ({ flex: 'auto' }),
            'flex-none': () => ({ flex: 'none' }),
            'flex-grow': (value) => ({ flexGrow: value || '1' }),
            'flex-shrink': (value) => ({ flexShrink: value || '1' }),
            'flex-basis': (value) => ({ flexBasis: `${value}px` }),

            // ═══════════════════════════════════════════════════════════════
            // GRID (20+ utilities)
            // ═══════════════════════════════════════════════════════════════
            'grid-cols': (value) => ({ display: 'grid', gridTemplateColumns: `repeat(${value}, minmax(0, 1fr))` }),
            'grid-rows': (value) => ({ display: 'grid', gridTemplateRows: `repeat(${value}, minmax(0, 1fr))` }),
            'auto-cols': (value) => ({ gridAutoColumns: value }),
            'auto-rows': (value) => ({ gridAutoRows: value }),
            'col-span': (value) => ({ gridColumn: `span ${value} / span ${value}` }),
            'row-span': (value) => ({ gridRow: `span ${value} / span ${value}` }),
            'col-start': (value) => ({ gridColumnStart: value }),
            'col-end': (value) => ({ gridColumnEnd: value }),
            'row-start': (value) => ({ gridRowStart: value }),
            'row-end': (value) => ({ gridRowEnd: value }),
            'grid-auto-flow-row': () => ({ gridAutoFlow: 'row' }),
            'grid-auto-flow-col': () => ({ gridAutoFlow: 'column' }),
            'grid-auto-flow-dense': () => ({ gridAutoFlow: 'dense' }),

            // ═══════════════════════════════════════════════════════════════
            // COLORS - BACKGROUND (40+ utilities)
            // ═══════════════════════════════════════════════════════════════
            'bg-slate': () => ({ backgroundColor: '#64748B' }),
            'bg-gray': () => ({ backgroundColor: '#6B7280' }),
            'bg-zinc': () => ({ backgroundColor: '#71717A' }),
            'bg-neutral': () => ({ backgroundColor: '#737373' }),
            'bg-stone': () => ({ backgroundColor: '#78716C' }),
            'bg-red': () => ({ backgroundColor: '#EF4444' }),
            'bg-red-light': () => ({ backgroundColor: '#FCA5A5' }),
            'bg-red-dark': () => ({ backgroundColor: '#991B1B' }),
            'bg-orange': () => ({ backgroundColor: '#F97316' }),
            'bg-orange-light': () => ({ backgroundColor: '#FED7AA' }),
            'bg-orange-dark': () => ({ backgroundColor: '#9A3412' }),
            'bg-amber': () => ({ backgroundColor: '#F59E0B' }),
            'bg-amber-light': () => ({ backgroundColor: '#FDE68A' }),
            'bg-yellow': () => ({ backgroundColor: '#FBBF24' }),
            'bg-yellow-light': () => ({ backgroundColor: '#FEF3C7' }),
            'bg-lime': () => ({ backgroundColor: '#84CC16' }),
            'bg-lime-light': () => ({ backgroundColor: '#DCFCE7' }),
            'bg-green': () => ({ backgroundColor: '#10B981' }),
            'bg-green-light': () => ({ backgroundColor: '#BBFBEE' }),
            'bg-green-dark': () => ({ backgroundColor: '#065F46' }),
            'bg-emerald': () => ({ backgroundColor: '#50C878' }),
            'bg-teal': () => ({ backgroundColor: '#14B8A6' }),
            'bg-cyan': () => ({ backgroundColor: '#06B6D4' }),
            'bg-cyan-light': () => ({ backgroundColor: '#CFFAFE' }),
            'bg-sky': () => ({ backgroundColor: '#0EA5E9' }),
            'bg-blue': () => ({ backgroundColor: '#3B82F6' }),
            'bg-blue-light': () => ({ backgroundColor: '#BFDBFE' }),
            'bg-blue-dark': () => ({ backgroundColor: '#1E40AF' }),
            'bg-indigo': () => ({ backgroundColor: '#6366F1' }),
            'bg-indigo-light': () => ({ backgroundColor: '#E0E7FF' }),
            'bg-purple': () => ({ backgroundColor: '#8B5CF6' }),
            'bg-purple-light': () => ({ backgroundColor: '#E9D5FF' }),
            'bg-purple-dark': () => ({ backgroundColor: '#6D28D9' }),
            'bg-fuchsia': () => ({ backgroundColor: '#D946EF' }),
            'bg-pink': () => ({ backgroundColor: '#EC4899' }),
            'bg-pink-light': () => ({ backgroundColor: '#FCE7F3' }),
            'bg-pink-dark': () => ({ backgroundColor: '#831843' }),
            'bg-rose': () => ({ backgroundColor: '#F43F5E' }),
            'bg-rose-light': () => ({ backgroundColor: '#FFE4E6' }),
            'bg-black': () => ({ backgroundColor: '#000000' }),
            'bg-white': () => ({ backgroundColor: '#FFFFFF' }),
            'bg-transparent': () => ({ backgroundColor: 'transparent' }),

            // ═══════════════════════════════════════════════════════════════
            // COLORS - TEXT (40+ utilities)
            // ═══════════════════════════════════════════════════════════════
            'text-slate': () => ({ color: '#64748B' }),
            'text-gray': () => ({ color: '#6B7280' }),
            'text-zinc': () => ({ color: '#71717A' }),
            'text-neutral': () => ({ color: '#737373' }),
            'text-stone': () => ({ color: '#78716C' }),
            'text-red': () => ({ color: '#EF4444' }),
            'text-red-light': () => ({ color: '#FCA5A5' }),
            'text-red-dark': () => ({ color: '#991B1B' }),
            'text-orange': () => ({ color: '#F97316' }),
            'text-orange-light': () => ({ color: '#FED7AA' }),
            'text-amber': () => ({ color: '#F59E0B' }),
            'text-yellow': () => ({ color: '#FBBF24' }),
            'text-lime': () => ({ color: '#84CC16' }),
            'text-green': () => ({ color: '#10B981' }),
            'text-green-light': () => ({ color: '#D1FAE5' }),
            'text-green-dark': () => ({ color: '#065F46' }),
            'text-emerald': () => ({ color: '#50C878' }),
            'text-teal': () => ({ color: '#14B8A6' }),
            'text-cyan': () => ({ color: '#06B6D4' }),
            'text-sky': () => ({ color: '#0EA5E9' }),
            'text-blue': () => ({ color: '#3B82F6' }),
            'text-blue-light': () => ({ color: '#93C5FD' }),
            'text-blue-dark': () => ({ color: '#1E40AF' }),
            'text-indigo': () => ({ color: '#6366F1' }),
            'text-purple': () => ({ color: '#8B5CF6' }),
            'text-purple-light': () => ({ color: '#D8B4FE' }),
            'text-purple-dark': () => ({ color: '#6D28D9' }),
            'text-fuchsia': () => ({ color: '#D946EF' }),
            'text-pink': () => ({ color: '#EC4899' }),
            'text-pink-light': () => ({ color: '#FBCFE8' }),
            'text-rose': () => ({ color: '#F43F5E' }),
            'text-black': () => ({ color: '#000000' }),
            'text-white': () => ({ color: '#FFFFFF' }),

            // ═══════════════════════════════════════════════════════════════
            // COLORS - BORDER (30+ utilities)
            // ═══════════════════════════════════════════════════════════════
            'border-slate': () => ({ borderColor: '#64748B' }),
            'border-gray': () => ({ borderColor: '#6B7280' }),
            'border-red': () => ({ borderColor: '#EF4444' }),
            'border-orange': () => ({ borderColor: '#F97316' }),
            'border-amber': () => ({ borderColor: '#F59E0B' }),
            'border-yellow': () => ({ borderColor: '#FBBF24' }),
            'border-lime': () => ({ borderColor: '#84CC16' }),
            'border-green': () => ({ borderColor: '#10B981' }),
            'border-emerald': () => ({ borderColor: '#50C878' }),
            'border-teal': () => ({ borderColor: '#14B8A6' }),
            'border-cyan': () => ({ borderColor: '#06B6D4' }),
            'border-sky': () => ({ borderColor: '#0EA5E9' }),
            'border-blue': () => ({ borderColor: '#3B82F6' }),
            'border-indigo': () => ({ borderColor: '#6366F1' }),
            'border-purple': () => ({ borderColor: '#8B5CF6' }),
            'border-fuchsia': () => ({ borderColor: '#D946EF' }),
            'border-pink': () => ({ borderColor: '#EC4899' }),
            'border-rose': () => ({ borderColor: '#F43F5E' }),
            'border-white': () => ({ borderColor: '#FFFFFF' }),
            'border-black': () => ({ borderColor: '#000000' }),
            'border-transparent': () => ({ borderColor: 'transparent' }),

            // ═══════════════════════════════════════════════════════════════
            // BORDERS (20+ utilities)
            // ═══════════════════════════════════════════════════════════════
            'border': () => ({ border: '1px solid #D1D5DB' }),
            'border-0': () => ({ border: 'none' }),
            'border-2': () => ({ border: '2px solid #D1D5DB' }),
            'border-4': () => ({ border: '4px solid #D1D5DB' }),
            'border-8': () => ({ border: '8px solid #D1D5DB' }),
            'border-t': () => ({ borderTop: '1px solid #D1D5DB' }),
            'border-t-2': () => ({ borderTop: '2px solid #D1D5DB' }),
            'border-t-4': () => ({ borderTop: '4px solid #D1D5DB' }),
            'border-b': () => ({ borderBottom: '1px solid #D1D5DB' }),
            'border-b-2': () => ({ borderBottom: '2px solid #D1D5DB' }),
            'border-b-4': () => ({ borderBottom: '4px solid #D1D5DB' }),
            'border-l': () => ({ borderLeft: '1px solid #D1D5DB' }),
            'border-l-2': () => ({ borderLeft: '2px solid #D1D5DB' }),
            'border-l-4': () => ({ borderLeft: '4px solid #D1D5DB' }),
            'border-r': () => ({ borderRight: '1px solid #D1D5DB' }),
            'border-r-2': () => ({ borderRight: '2px solid #D1D5DB' }),
            'border-r-4': () => ({ borderRight: '4px solid #D1D5DB' }),

            // ═══════════════════════════════════════════════════════════════
            // BORDER RADIUS (15+ utilities)
            // ═══════════════════════════════════════════════════════════════
            'rounded': () => ({ borderRadius: '4px' }),
            'rounded-none': () => ({ borderRadius: '0' }),
            'rounded-sm': () => ({ borderRadius: '2px' }),
            'rounded-md': () => ({ borderRadius: '8px' }),
            'rounded-lg': () => ({ borderRadius: '12px' }),
            'rounded-xl': () => ({ borderRadius: '16px' }),
            'rounded-2xl': () => ({ borderRadius: '20px' }),
            'rounded-3xl': () => ({ borderRadius: '24px' }),
            'rounded-full': () => ({ borderRadius: '9999px' }),
            'rounded-t': () => ({ borderTopLeftRadius: '4px', borderTopRightRadius: '4px' }),
            'rounded-b': () => ({ borderBottomLeftRadius: '4px', borderBottomRightRadius: '4px' }),
            'rounded-l': () => ({ borderTopLeftRadius: '4px', borderBottomLeftRadius: '4px' }),
            'rounded-r': () => ({ borderTopRightRadius: '4px', borderBottomRightRadius: '4px' }),
            'rounded-tl': (value) => ({ borderTopLeftRadius: `${value || 4}px` }),
            'rounded-tr': (value) => ({ borderTopRightRadius: `${value || 4}px` }),
            'rounded-bl': (value) => ({ borderBottomLeftRadius: `${value || 4}px` }),
            'rounded-br': (value) => ({ borderBottomRightRadius: `${value || 4}px` }),

            // ═══════════════════════════════════════════════════════════════
            // TYPOGRAPHY - FONT SIZE (12+ utilities)
            // ═══════════════════════════════════════════════════════════════
            'text-xs': () => ({ fontSize: '12px', lineHeight: '16px' }),
            'text-sm': () => ({ fontSize: '14px', lineHeight: '20px' }),
            'text-base': () => ({ fontSize: '16px', lineHeight: '24px' }),
            'text-lg': () => ({ fontSize: '18px', lineHeight: '28px' }),
            'text-xl': () => ({ fontSize: '20px', lineHeight: '28px' }),
            'text-2xl': () => ({ fontSize: '24px', lineHeight: '32px' }),
            'text-3xl': () => ({ fontSize: '30px', lineHeight: '36px' }),
            'text-4xl': () => ({ fontSize: '36px', lineHeight: '40px' }),
            'text-5xl': () => ({ fontSize: '48px', lineHeight: '48px' }),
            'text-6xl': () => ({ fontSize: '60px', lineHeight: '60px' }),
            'text-7xl': () => ({ fontSize: '72px', lineHeight: '72px' }),
            'text-8xl': () => ({ fontSize: '96px', lineHeight: '96px' }),

            // ═══════════════════════════════════════════════════════════════
            // TYPOGRAPHY - FONT WEIGHT (8+ utilities)
            // ═══════════════════════════════════════════════════════════════
            'font-thin': () => ({ fontWeight: '100' }),
            'font-extralight': () => ({ fontWeight: '200' }),
            'font-light': () => ({ fontWeight: '300' }),
            'font-normal': () => ({ fontWeight: '400' }),
            'font-medium': () => ({ fontWeight: '500' }),
            'font-semibold': () => ({ fontWeight: '600' }),
            'font-bold': () => ({ fontWeight: '700' }),
            'font-extrabold': () => ({ fontWeight: '800' }),
            'font-black': () => ({ fontWeight: '900' }),

            // ═══════════════════════════════════════════════════════════════
            // TYPOGRAPHY - TEXT ALIGNMENT (5+ utilities)
            // ═══════════════════════════════════════════════════════════════
            'text-left': () => ({ textAlign: 'left' }),
            'text-center': () => ({ textAlign: 'center' }),
            'text-right': () => ({ textAlign: 'right' }),
            'text-justify': () => ({ textAlign: 'justify' }),
            'text-start': () => ({ textAlign: 'start' }),
            'text-end': () => ({ textAlign: 'end' }),

            // ═══════════════════════════════════════════════════════════════
            // TYPOGRAPHY - LINE HEIGHT (7+ utilities)
            // ═══════════════════════════════════════════════════════════════
            'leading-3': () => ({ lineHeight: '0.75rem' }),
            'leading-4': () => ({ lineHeight: '1rem' }),
            'leading-5': () => ({ lineHeight: '1.25rem' }),
            'leading-6': () => ({ lineHeight: '1.5rem' }),
            'leading-7': () => ({ lineHeight: '1.75rem' }),
            'leading-8': () => ({ lineHeight: '2rem' }),
            'leading-9': () => ({ lineHeight: '2.25rem' }),
            'leading-10': () => ({ lineHeight: '2.5rem' }),
            'leading-tight': () => ({ lineHeight: '1.25' }),
            'leading-snug': () => ({ lineHeight: '1.375' }),
            'leading-normal': () => ({ lineHeight: '1.5' }),
            'leading-relaxed': () => ({ lineHeight: '1.625' }),
            'leading-loose': () => ({ lineHeight: '2' }),

            // ═══════════════════════════════════════════════════════════════
            // TYPOGRAPHY - LETTER SPACING (7+ utilities)
            // ═══════════════════════════════════════════════════════════════
            'tracking-tighter': () => ({ letterSpacing: '-0.05em' }),
            'tracking-tight': () => ({ letterSpacing: '-0.025em' }),
            'tracking-normal': () => ({ letterSpacing: '0em' }),
            'tracking-wide': () => ({ letterSpacing: '0.025em' }),
            'tracking-wider': () => ({ letterSpacing: '0.05em' }),
            'tracking-widest': () => ({ letterSpacing: '0.1em' }),

            // ═══════════════════════════════════════════════════════════════
            // TEXT DECORATION (10+ utilities)
            // ═══════════════════════════════════════════════════════════════
            'underline': () => ({ textDecoration: 'underline' }),
            'overline': () => ({ textDecoration: 'overline' }),
            'line-through': () => ({ textDecoration: 'line-through' }),
            'no-underline': () => ({ textDecoration: 'none' }),
            'text-uppercase': () => ({ textTransform: 'uppercase' }),
            'text-lowercase': () => ({ textTransform: 'lowercase' }),
            'text-capitalize': () => ({ textTransform: 'capitalize' }),
            'text-normal-case': () => ({ textTransform: 'none' }),
            'italic': () => ({ fontStyle: 'italic' }),
            'not-italic': () => ({ fontStyle: 'normal' }),
            'oblique': () => ({ fontStyle: 'oblique' }),

            // ═══════════════════════════════════════════════════════════════
            // POSITIONING (20+ utilities)
            // ═══════════════════════════════════════════════════════════════
            'position': (value) => ({ position: value }),
            'static': () => ({ position: 'static' }),
            'absolute': () => ({ position: 'absolute' }),
            'relative': () => ({ position: 'relative' }),
            'fixed': () => ({ position: 'fixed' }),
            'sticky': () => ({ position: 'sticky' }),
            'top': (value) => ({ top: `${value}px` }),
            'bottom': (value) => ({ bottom: `${value}px` }),
            'left': (value) => ({ left: `${value}px` }),
            'right': (value) => ({ right: `${value}px` }),
            'inset': (value) => ({ top: `${value}px`, right: `${value}px`, bottom: `${value}px`, left: `${value}px` }),
            'inset-x': (value) => ({ left: `${value}px`, right: `${value}px` }),
            'inset-y': (value) => ({ top: `${value}px`, bottom: `${value}px` }),
            'z': (value) => ({ zIndex: value }),
            'z-0': () => ({ zIndex: '0' }),
            'z-10': () => ({ zIndex: '10' }),
            'z-20': () => ({ zIndex: '20' }),
            'z-30': () => ({ zIndex: '30' }),
            'z-40': () => ({ zIndex: '40' }),
            'z-50': () => ({ zIndex: '50' }),
            'z-auto': () => ({ zIndex: 'auto' }),

            // ═══════════════════════════════════════════════════════════════
            // BOX SHADOW & EFFECTS (15+ utilities)
            // ═══════════════════════════════════════════════════════════════
            'shadow': () => ({ boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)' }),
            'shadow-sm': () => ({ boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)' }),
            'shadow-md': () => ({ boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }),
            'shadow-lg': () => ({ boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }),
            'shadow-xl': () => ({ boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }),
            'shadow-2xl': () => ({ boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }),
            'shadow-inner': () => ({ boxShadow: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)' }),
            'shadow-none': () => ({ boxShadow: 'none' }),
            'opacity': (value) => ({ opacity: value / 100 }),
            'opacity-0': () => ({ opacity: '0' }),
            'opacity-25': () => ({ opacity: '0.25' }),
            'opacity-50': () => ({ opacity: '0.5' }),
            'opacity-75': () => ({ opacity: '0.75' }),
            'opacity-100': () => ({ opacity: '1' }),

            // ═══════════════════════════════════════════════════════════════
            // OVERFLOW & SCROLL (10+ utilities)
            // ═══════════════════════════════════════════════════════════════
            'overflow-auto': () => ({ overflow: 'auto' }),
            'overflow-hidden': () => ({ overflow: 'hidden' }),
            'overflow-visible': () => ({ overflow: 'visible' }),
            'overflow-scroll': () => ({ overflow: 'scroll' }),
            'overflow-x-auto': () => ({ overflowX: 'auto' }),
            'overflow-y-auto': () => ({ overflowY: 'auto' }),
            'overflow-x-hidden': () => ({ overflowX: 'hidden' }),
            'overflow-y-hidden': () => ({ overflowY: 'hidden' }),
            'scroll-smooth': () => ({ scrollBehavior: 'smooth' }),
            'scroll-auto': () => ({ scrollBehavior: 'auto' }),

            // ═══════════════════════════════════════════════════════════════
            // CURSOR & INTERACTION (10+ utilities)
            // ═══════════════════════════════════════════════════════════════
            'cursor-auto': () => ({ cursor: 'auto' }),
            'cursor-default': () => ({ cursor: 'default' }),
            'cursor-pointer': () => ({ cursor: 'pointer' }),
            'cursor-wait': () => ({ cursor: 'wait' }),
            'cursor-text': () => ({ cursor: 'text' }),
            'cursor-move': () => ({ cursor: 'move' }),
            'cursor-not-allowed': () => ({ cursor: 'not-allowed' }),
            'cursor-hand': () => ({ cursor: 'hand' }),
            'cursor-help': () => ({ cursor: 'help' }),
            'pointer-events-none': () => ({ pointerEvents: 'none' }),
            'pointer-events-auto': () => ({ pointerEvents: 'auto' }),

            // ═══════════════════════════════════════════════════════════════
            // TRANSITIONS & TRANSFORMS (20+ utilities)
            // ═══════════════════════════════════════════════════════════════
            'transition': () => ({ transition: 'all 0.3s ease' }),
            'transition-none': () => ({ transition: 'none' }),
            'transition-all': () => ({ transition: 'all 0.3s ease' }),
            'transition-colors': () => ({ transition: 'background-color, border-color, color 0.3s ease' }),
            'transition-opacity': () => ({ transition: 'opacity 0.3s ease' }),
            'transition-transform': () => ({ transition: 'transform 0.3s ease' }),
            'duration-75': () => ({ transitionDuration: '75ms' }),
            'duration-100': () => ({ transitionDuration: '100ms' }),
            'duration-150': () => ({ transitionDuration: '150ms' }),
            'duration-200': () => ({ transitionDuration: '200ms' }),
            'duration-300': () => ({ transitionDuration: '300ms' }),
            'duration-500': () => ({ transitionDuration: '500ms' }),
            'duration-700': () => ({ transitionDuration: '700ms' }),
            'duration-1000': () => ({ transitionDuration: '1000ms' }),
            'ease-linear': () => ({ transitionTimingFunction: 'linear' }),
            'ease-in': () => ({ transitionTimingFunction: 'ease-in' }),
            'ease-out': () => ({ transitionTimingFunction: 'ease-out' }),
            'ease-in-out': () => ({ transitionTimingFunction: 'ease-in-out' }),
            'scale': (value) => ({ transform: `scale(${value / 100})` }),
            'scale-50': () => ({ transform: 'scale(0.5)' }),
            'scale-75': () => ({ transform: 'scale(0.75)' }),
            'scale-100': () => ({ transform: 'scale(1)' }),
            'scale-110': () => ({ transform: 'scale(1.1)' }),
            'scale-125': () => ({ transform: 'scale(1.25)' }),
            'scale-150': () => ({ transform: 'scale(1.5)' }),
            'rotate': (value) => ({ transform: `rotate(${value}deg)` }),
            'rotate-0': () => ({ transform: 'rotate(0deg)' }),
            'rotate-45': () => ({ transform: 'rotate(45deg)' }),
            'rotate-90': () => ({ transform: 'rotate(90deg)' }),
            'rotate-180': () => ({ transform: 'rotate(180deg)' }),
            '-rotate-45': () => ({ transform: 'rotate(-45deg)' }),
            '-rotate-90': () => ({ transform: 'rotate(-90deg)' }),
            'skew-x': (value) => ({ transform: `skewX(${value}deg)` }),
            'skew-y': (value) => ({ transform: `skewY(${value}deg)` }),
            'translate-x': (value) => ({ transform: `translateX(${value}px)` }),
            'translate-y': (value) => ({ transform: `translateY(${value}px)` }),
            'transform': () => ({ transform: 'translate(0, 0)' }),
            'transform-none': () => ({ transform: 'none' }),

            // ═══════════════════════════════════════════════════════════════
            // FILTERS & EFFECTS (15+ utilities)
            // ═══════════════════════════════════════════════════════════════
            'blur': (value) => ({ filter: `blur(${value}px)` }),
            'blur-none': () => ({ filter: 'blur(0)' }),
            'blur-sm': () => ({ filter: 'blur(4px)' }),
            'blur-md': () => ({ filter: 'blur(8px)' }),
            'blur-lg': () => ({ filter: 'blur(16px)' }),
            'blur-xl': () => ({ filter: 'blur(24px)' }),
            'brightness': (value) => ({ filter: `brightness(${value}%)` }),
            'brightness-50': () => ({ filter: 'brightness(50%)' }),
            'brightness-100': () => ({ filter: 'brightness(100%)' }),
            'brightness-150': () => ({ filter: 'brightness(150%)' }),
            'contrast': (value) => ({ filter: `contrast(${value}%)` }),
            'contrast-50': () => ({ filter: 'contrast(50%)' }),
            'contrast-100': () => ({ filter: 'contrast(100%)' }),
            'contrast-150': () => ({ filter: 'contrast(150%)' }),
            'grayscale': () => ({ filter: 'grayscale(100%)' }),
            'grayscale-0': () => ({ filter: 'grayscale(0%)' }),
            'invert': () => ({ filter: 'invert(100%)' }),
            'invert-0': () => ({ filter: 'invert(0%)' }),
            'saturate': (value) => ({ filter: `saturate(${value}%)` }),
            'saturate-50': () => ({ filter: 'saturate(50%)' }),
            'saturate-100': () => ({ filter: 'saturate(100%)' }),
            'saturate-150': () => ({ filter: 'saturate(150%)' }),
            'sepia': () => ({ filter: 'sepia(100%)' }),
            'sepia-0': () => ({ filter: 'sepia(0%)' }),

            // ═══════════════════════════════════════════════════════════════
            // BACKDROP FILTERS (8+ utilities)
            // ═══════════════════════════════════════════════════════════════
            'backdrop-blur': (value) => ({ backdropFilter: `blur(${value}px)` }),
            'backdrop-blur-sm': () => ({ backdropFilter: 'blur(4px)' }),
            'backdrop-blur-md': () => ({ backdropFilter: 'blur(8px)' }),
            'backdrop-blur-lg': () => ({ backdropFilter: 'blur(16px)' }),
            'backdrop-brightness': (value) => ({ backdropFilter: `brightness(${value}%)` }),
            'backdrop-contrast': (value) => ({ backdropFilter: `contrast(${value}%)` }),
            'backdrop-grayscale': () => ({ backdropFilter: 'grayscale(100%)' }),
            'backdrop-invert': () => ({ backdropFilter: 'invert(100%)' }),

            // ═══════════════════════════════════════════════════════════════
            // BACKGROUND PATTERNS (5+ utilities)
            // ═══════════════════════════════════════════════════════════════
            'bg-fixed': () => ({ backgroundAttachment: 'fixed' }),
            'bg-local': () => ({ backgroundAttachment: 'local' }),
            'bg-scroll': () => ({ backgroundAttachment: 'scroll' }),
            'bg-clip-border': () => ({ backgroundClip: 'border-box' }),
            'bg-clip-padding': () => ({ backgroundClip: 'padding-box' }),
            'bg-clip-content': () => ({ backgroundClip: 'content-box' }),
            'bg-clip-text': () => ({ backgroundClip: 'text' }),

            // ═══════════════════════════════════════════════════════════════
            // WHITE SPACE & WORD BREAKING (8+ utilities)
            // ═══════════════════════════════════════════════════════════════
            'whitespace-normal': () => ({ whiteSpace: 'normal' }),
            'whitespace-nowrap': () => ({ whiteSpace: 'nowrap' }),
            'whitespace-pre': () => ({ whiteSpace: 'pre' }),
            'whitespace-pre-line': () => ({ whiteSpace: 'pre-line' }),
            'whitespace-pre-wrap': () => ({ whiteSpace: 'pre-wrap' }),
            'break-normal': () => ({ wordBreak: 'normal', overflowWrap: 'normal' }),
            'break-words': () => ({ overflowWrap: 'break-word' }),
            'break-all': () => ({ wordBreak: 'break-all' }),
            'truncate': () => ({ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }),

            // ═══════════════════════════════════════════════════════════════
            // VERTICAL ALIGN (6+ utilities)
            // ═══════════════════════════════════════════════════════════════
            'align-baseline': () => ({ verticalAlign: 'baseline' }),
            'align-top': () => ({ verticalAlign: 'top' }),
            'align-middle': () => ({ verticalAlign: 'middle' }),
            'align-bottom': () => ({ verticalAlign: 'bottom' }),
            'align-text-top': () => ({ verticalAlign: 'text-top' }),
            'align-text-bottom': () => ({ verticalAlign: 'text-bottom' }),

            // ═══════════════════════════════════════════════════════════════
            // LIST STYLES (8+ utilities)
            // ═══════════════════════════════════════════════════════════════
            'list-none': () => ({ listStyle: 'none' }),
            'list-disc': () => ({ listStyle: 'disc' }),
            'list-decimal': () => ({ listStyle: 'decimal' }),
            'list-inside': () => ({ listStylePosition: 'inside' }),
            'list-outside': () => ({ listStylePosition: 'outside' }),

            // ═══════════════════════════════════════════════════════════════
            // MISC UTILITIES (10+ utilities)
            // ═══════════════════════════════════════════════════════════════
            'resize': () => ({ resize: 'both' }),
            'resize-none': () => ({ resize: 'none' }),
            'resize-y': () => ({ resize: 'vertical' }),
            'resize-x': () => ({ resize: 'horizontal' }),
            'user-select-none': () => ({ userSelect: 'none' }),
            'user-select-text': () => ({ userSelect: 'text' }),
            'user-select-all': () => ({ userSelect: 'all' }),
            'user-select-auto': () => ({ userSelect: 'auto' }),
            'select-none': () => ({ userSelect: 'none' }),
            'select-text': () => ({ userSelect: 'text' }),
            'will-change-auto': () => ({ willChange: 'auto' }),
            'will-change-scroll': () => ({ willChange: 'scroll-position' }),
            'will-change-contents': () => ({ willChange: 'contents' }),
            'will-change-transform': () => ({ willChange: 'transform' }),
        };
    }

    /**
     * Parse a chai-* class name and extract utility and value
     */
    parseClassName(className) {
        if (!className.startsWith('chai-')) return null;

        const withoutPrefix = className.slice(5);
        const parts = withoutPrefix.split('-');

        for (let i = parts.length; i > 0; i--) {
            const utility = parts.slice(0, i).join('-');
            const value = parts.slice(i).join('-');

            if (this.utilities[utility]) {
                return {
                    utility,
                    value: value || null,
                };
            }
        }

        return null;
    }

    /**
     * Apply styles from a parsed chai class to an element
     */
    applyStyle(element, parsed) {
        if (!parsed) return;

        const utility = this.utilities[parsed.utility];
        if (!utility) return;

        let styles;
        try {
            styles = parsed.value !== null ? utility(parsed.value) : utility();
        } catch (e) {
            console.warn(`ChaiCSS: Error applying style for ${parsed.utility}:`, e);
            return;
        }

        if (styles && typeof styles === 'object') {
            Object.assign(element.style, styles);
        }
    }

    /**
     * Process all elements with chai-* classes in the DOM
     */
    process() {
        const elements = document.querySelectorAll('[class*="chai-"]');
        let processedCount = 0;

        elements.forEach((element) => {
            if (this.processedElements.has(element)) return;

            const classNames = Array.from(element.classList);
            const chaiClasses = classNames.filter((c) => c.startsWith('chai-'));

            chaiClasses.forEach((className) => {
                const parsed = this.parseClassName(className);
                if (parsed) {
                    this.applyStyle(element, parsed);
                    processedCount++;
                }
            });

            this.processedElements.add(element);
        });

        return processedCount;
    }

    /**
     * Add custom utilities to the engine
     */
    addUtility(name, styleFunction) {
        this.utilities[name] = styleFunction;
        console.log(`ChaiCSS: Added custom utility '${name}'`);
    }

    /**
     * Remove chai-* classes from elements after applying styles
     */
    removeChaiClasses() {
        const elements = document.querySelectorAll('[class*="chai-"]');
        elements.forEach((element) => {
            const classNames = Array.from(element.classList);
            classNames.forEach((className) => {
                if (className.startsWith('chai-')) {
                    element.classList.remove(className);
                }
            });
        });
    }

    /**
     * Watch for new elements added to the DOM
     */
    watch() {
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === 'childList') {
                    this.process();
                }
            });
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true,
        });

        console.log('ChaiCSS: Watching for DOM changes');
        return observer;
    }

    /**
     * Get statistics about available utilities
     */
    getStats() {
        const utilities = Object.keys(this.utilities);
        return {
            totalUtilities: utilities.length,
            utilities: utilities.sort()
        };
    }
}

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        window.chaiCSS = new ChaiCSSEngine();
        window.chaiCSS.process();
        console.log(`🍵 ChaiCSS Engine initialized with ${Object.keys(window.chaiCSS.utilities).length} utilities`);
    });
} else {
    window.chaiCSS = new ChaiCSSEngine();
    window.chaiCSS.process();
    console.log(`🍵 ChaiCSS Engine initialized with ${Object.keys(window.chaiCSS.utilities).length} utilities`);
}