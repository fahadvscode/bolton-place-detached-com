-- Verify the shared bolton_place_leads table exists before proceeding.
select to_regclass('public.bolton_place_leads') as leads_table_exists;

-- Idempotent safety net — a no-op if boltonplaceopushomes.com already created it.
create table if not exists bolton_place_leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  first_name text not null,
  last_name text not null,
  email text not null,
  phone text not null,
  is_broker boolean not null default false,
  site_source text not null,
  consent boolean not null default false,
  consent_timestamp timestamptz,
  page_path text,
  utm_source text,
  utm_medium text,
  utm_campaign text,
  utm_term text,
  utm_content text
);

alter table bolton_place_leads enable row level security;

drop policy if exists "anon can insert bolton_place_leads" on bolton_place_leads;
create policy "anon can insert bolton_place_leads"
  on bolton_place_leads for insert
  to anon
  with check (true);

create index if not exists bolton_place_leads_site_source_idx on bolton_place_leads (site_source);
create index if not exists bolton_place_leads_created_at_idx on bolton_place_leads (created_at desc);
