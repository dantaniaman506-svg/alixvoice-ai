export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.4"
  }
  public: {
    Tables: {
      agents: {
        Row: {
          agent_name: string | null
          business_description: string | null
          business_name: string | null
          business_type: string | null
          created_at: string
          emergency_number: string | null
          faq: string | null
          id: string
          location: string | null
          services: string | null
          updated_at: string
          user_id: string
          voice_type: string | null
          website: string | null
          working_hours: string | null
        }
        Insert: {
          agent_name?: string | null
          business_description?: string | null
          business_name?: string | null
          business_type?: string | null
          created_at?: string
          emergency_number?: string | null
          faq?: string | null
          id?: string
          location?: string | null
          services?: string | null
          updated_at?: string
          user_id: string
          voice_type?: string | null
          website?: string | null
          working_hours?: string | null
        }
        Update: {
          agent_name?: string | null
          business_description?: string | null
          business_name?: string | null
          business_type?: string | null
          created_at?: string
          emergency_number?: string | null
          faq?: string | null
          id?: string
          location?: string | null
          services?: string | null
          updated_at?: string
          user_id?: string
          voice_type?: string | null
          website?: string | null
          working_hours?: string | null
        }
        Relationships: []
      }
      appointments: {
        Row: {
          appointment_date: string | null
          appointment_time: string | null
          client_email: string | null
          client_name: string
          client_phone: string | null
          created_at: string
          id: string
          service_address: string | null
          service_type: string | null
          status: Database["public"]["Enums"]["appointment_status"]
          updated_at: string
          user_id: string
        }
        Insert: {
          appointment_date?: string | null
          appointment_time?: string | null
          client_email?: string | null
          client_name: string
          client_phone?: string | null
          created_at?: string
          id?: string
          service_address?: string | null
          service_type?: string | null
          status?: Database["public"]["Enums"]["appointment_status"]
          updated_at?: string
          user_id: string
        }
        Update: {
          appointment_date?: string | null
          appointment_time?: string | null
          client_email?: string | null
          client_name?: string
          client_phone?: string | null
          created_at?: string
          id?: string
          service_address?: string | null
          service_type?: string | null
          status?: Database["public"]["Enums"]["appointment_status"]
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      extra_minutes: {
        Row: {
          created_at: string
          id: string
          minutes_added: number
          purchase_price: number
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          minutes_added: number
          purchase_price: number
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          minutes_added?: number
          purchase_price?: number
          user_id?: string
        }
        Relationships: []
      }
      orders: {
        Row: {
          created_at: string
          id: string
          order_id: string | null
          payment_status: string
          plan: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          order_id?: string | null
          payment_status?: string
          plan: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          order_id?: string | null
          payment_status?: string
          plan?: string
          user_id?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          country: string | null
          created_at: string
          email: string | null
          full_name: string | null
          id: string
          phone: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          country?: string | null
          created_at?: string
          email?: string | null
          full_name?: string | null
          id?: string
          phone?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          country?: string | null
          created_at?: string
          email?: string | null
          full_name?: string | null
          id?: string
          phone?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      virtual_numbers: {
        Row: {
          area_code: string | null
          assigned_at: string
          country: string | null
          id: string
          order_id: string
          telnyx_number: string | null
          user_id: string
        }
        Insert: {
          area_code?: string | null
          assigned_at?: string
          country?: string | null
          id?: string
          order_id: string
          telnyx_number?: string | null
          user_id: string
        }
        Update: {
          area_code?: string | null
          assigned_at?: string
          country?: string | null
          id?: string
          order_id?: string
          telnyx_number?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "virtual_numbers_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      appointment_status: "confirmed" | "cancelled" | "rescheduled"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      appointment_status: ["confirmed", "cancelled", "rescheduled"],
    },
  },
} as const
