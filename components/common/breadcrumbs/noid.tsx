'use client'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator
  } from '@/components/ui/breadcrumb';
import Link from 'next/link';

import { BreadcrumNoId } from 'types/breadcrums/noid';
export function DashboardBreadcrumb({item} : {item: BreadcrumNoId}) {
  const { name, link } = item;
    return (
      <Breadcrumb className="hidden md:flex">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/">Dashboard</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href={link}>{name}</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>

        </BreadcrumbList>
      </Breadcrumb>
    );
  }