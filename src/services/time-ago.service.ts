import TimeAgo from 'javascript-time-ago'
import pt from 'javascript-time-ago/locale/pt'

export function timeAgoService(date: string): string {
    TimeAgo.setDefaultLocale(pt.locale)
    TimeAgo.addLocale(pt)
    const timeAgo = new TimeAgo('pt-BR')

    return timeAgo.format(new Date(date));
}
