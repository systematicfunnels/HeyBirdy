import { Badge } from "@/components/ui/badge"

export interface Conversion {
  id: string
  affiliate: string
  amount: string
  commission: string
  status: string
  date: string
}

interface ConversionListItemProps {
  conversion: Conversion
}

export function ConversionListItem({ conversion }: ConversionListItemProps) {
  return (
    <tr className="group">
      <td className="py-5">
        <p className="text-sm font-black text-slate-900">{conversion.id}</p>
        <p className="text-[10px] font-bold text-slate-400">{conversion.date}</p>
      </td>
      <td className="py-5">
        <p className="text-sm font-bold text-slate-600">{conversion.affiliate}</p>
      </td>
      <td className="py-5 text-right">
        <p className="text-sm font-black text-slate-900">{conversion.amount}</p>
      </td>
      <td className="py-5 text-right">
        <p className="text-sm font-black text-emerald-600">{conversion.commission}</p>
      </td>
      <td className="py-5 text-right">
        <Badge className={`
          ${conversion.status === 'Paid' ? 'bg-green-100 text-green-600' : 
            conversion.status === 'Pending' ? 'bg-amber-100 text-amber-600' : 'bg-blue-100 text-blue-600'} 
          border-none font-black text-[10px] px-3 py-1 rounded-full uppercase tracking-widest
        `}>
          {conversion.status}
        </Badge>
      </td>
    </tr>
  )
}
