export type PpiItem = {
  month : string;
  ppi_yoy	: string;
  ppi_mp_yoy	: string;
  ppi_mp_qm_yoy	: string;
  ppi_mp_rm_yoy	: string;
  ppi_mp_p_yoy	: string;
  ppi_cg_yoy	: string;
  ppi_cg_f_yoy	: string;
  ppi_cg_c_yoy	: string;
  ppi_cg_adu_yoy	: string;
  ppi_cg_dcg_yoy	: string;
  ppi_mom	: string;
  ppi_mp_mom	: string;
  ppi_mp_qm_mom	: string;
  ppi_mp_rm_mom	: string;
  ppi_mp_p_mom	: string;
  ppi_cg_mom	: string;
  ppi_cg_f_mom	: string;
  ppi_cg_c_mom	: string;
  ppi_cg_adu_mom	: string;
  ppi_cg_dcg_mom	: string;
  ppi_accu	: string;
  ppi_mp_accu	: string;
  ppi_mp_qm_accu	: string;
  ppi_mp_rm_accu	: string;
  ppi_mp_p_accu	: string;
  ppi_cg_accu	: string;
  ppi_cg_f_accu	: string;
  ppi_cg_c_accu	: string;
  ppi_cg_adu_accu	: string;
  ppi_cg_dcg_accu	: string;
}

export type PpiQueryParams = {
  m ?: string;
  start_m ?: string;
  end_m ?: string;
}
