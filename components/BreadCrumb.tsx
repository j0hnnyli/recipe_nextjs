import { FC, Fragment } from 'react'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb'
type links = {
  href?: string;
  link: string;
}

type Props = {
  crumbs : links[]
}

const BreadCrumb: FC<Props> = ({ crumbs }) => {
  return (
    <Breadcrumb className="mb-5">
      <BreadcrumbList>
        {crumbs.map((links : links, index: number) => (
          <Fragment key={index}>
            <BreadcrumbItem>
              {crumbs.length - 1 === index ? (
                <BreadcrumbPage> {links.link} </BreadcrumbPage>
              ) : (
                <BreadcrumbLink href={links.href}>
                  {links.link}
                </BreadcrumbLink>
              )}
            </BreadcrumbItem>
            {crumbs.length - 1 !== index && <BreadcrumbSeparator/>}
          </Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  )
}

export default BreadCrumb