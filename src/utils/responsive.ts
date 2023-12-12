import useWindowSize from './window';

export default function useResponsive() {
    let responsive = 'desktop';
    if (useWindowSize().width < 1280)
        responsive = 'mobile';
    return responsive;
}