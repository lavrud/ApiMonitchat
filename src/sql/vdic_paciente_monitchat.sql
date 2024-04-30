CREATE OR REPLACE VIEW vdic_paciente_monitchat
CREATE OR REPLACE VIEW vdic_paciente_monitchat (
  cd_paciente,
  nm_paciente,
  nr_cpf,
  dt_nascimento,
  idade,
  data_agenda,
  hora_agenda,
  cd_multi_empresa,
  ds_multi_empresa,
  cd_prestador,
  nm_prestador,
  cd_recurso_central,
  ds_recurso_central
) AS
select
	p.cd_paciente ,
	p.nm_paciente ,
	p.nr_cpf ,
	p.dt_nascimento ,
	fn_idade(p.dt_nascimento) idade,
	to_char(iac.hr_agenda, 'dd/mm/yyyy') data_agenda,
	to_char(iac.hr_agenda, 'hh:mi') hora_agenda,
	ac.cd_multi_empresa ,
	me.ds_multi_empresa ,
	ac.cd_prestador ,
	pr.nm_prestador ,
	ac.cd_recurso_central,
	rc.ds_recurso_central
from
	dbamv.paciente p
	left join dbamv.it_agenda_central iac on (iac.cd_paciente = p.cd_paciente)
	inner join dbamv.agenda_central ac on (iac.cd_agenda_central = ac.cd_agenda_central)
	left join dbamv.prestador pr on (ac.cd_prestador = pr.cd_prestador)
	left join dbamv.recurso_central rc on (ac.cd_recurso_central = rc.cd_recurso_central)
	inner join dbamv.multi_empresas me on (ac.cd_multi_empresa = me.cd_multi_empresa)
where
	ac.dt_agenda >= trunc(sysdate)
UNION ALL
select
	p.cd_paciente ,
	p.nm_paciente ,
	p.nr_cpf ,
	p.dt_nascimento ,
	fn_idade(p.dt_nascimento) idade,
	to_char(iac.hr_agenda, 'dd/mm/yyyy') data_agenda,
	to_char(iac.hr_agenda, 'hh:mi') hora_agenda,
	ac.cd_multi_empresa ,
	me.ds_multi_empresa ,
	ac.cd_prestador ,
	pr.nm_prestador ,
	ac.cd_recurso_central,
	rc.ds_recurso_central
from
	dbamv.paciente p
	left join dbamv.it_agenda_central iac on (iac.cd_paciente = p.cd_paciente)
	inner join dbamv.agenda_central ac on (iac.cd_agenda_central = ac.cd_agenda_central)
	left join dbamv.prestador pr on (ac.cd_prestador = pr.cd_prestador)
	left join dbamv.recurso_central rc on (ac.cd_recurso_central = rc.cd_recurso_central)
	inner join dbamv.multi_empresas me on (ac.cd_multi_empresa = me.cd_multi_empresa)
where
  HR_AGENDA  = (SELECT max(a1.HR_AGENDA ) FROM it_agenda_central a1 WHERE a1.cd_paciente = p.CD_PACIENTE)
/

GRANT DELETE,INSERT,SELECT,UPDATE ON vdic_paciente_monitchat TO dbasgu;
GRANT DELETE,INSERT,SELECT,UPDATE ON vdic_paciente_monitchat TO mv2000;
GRANT DELETE,INSERT,SELECT,UPDATE ON vdic_paciente_monitchat TO mvintegra;
